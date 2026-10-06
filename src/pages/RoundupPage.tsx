import { useEffect, useRef, useState } from 'react';
import { Download, Copy, Check, ImagePlus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { stories } from '@/data/stories';
import { storyImageUrl } from '@/utils/storyImageUrl';
import { recentRoundupStories, renderRoundup } from '@/utils/roundupGraphic';

const recent = recentRoundupStories(stories);
const defaultCaption = '📰 Your city. Your stories. Hattiesburg Hub.\n\nMissed a headline? Catch up on local news, hometown achievements, arts, and the people moving our community forward.\n\nRead all our stories at https://www.hattiesburghub.com\n\n#HattiesburgHub #Hattiesburg #LocalNews';
export default function RoundupPage() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const generation = useRef(0);
  const [selected, setSelected] = useState(recent.slice(0, 3).map(s => s.id));
  const [headline, setHeadline] = useState('Catch up on Hattiesburg.');
  const [caption, setCaption] = useState(defaultCaption);
  const [image, setImage] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(true);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const version = ++generation.current;
    setBusy(true); setError(''); setImage('');
    const offscreen = document.createElement('canvas');
    renderRoundup(offscreen, recent.filter(s => selected.includes(s.id)), headline.trim() || 'Catch up on Hattiesburg.')
      .then(() => {
        if (generation.current !== version) return;
        const url = offscreen.toDataURL('image/png');
        setImage(url);
        const ctx = canvas.current?.getContext('2d');
        if (ctx) ctx.drawImage(offscreen, 0, 0);
      }).catch(e => { if (generation.current === version) setError(e instanceof Error ? e.message : 'Unable to create the graphic.'); })
      .finally(() => { if (generation.current === version) setBusy(false); });
  }, [selected, headline]);
  const toggle = (id: string) => setSelected(current => current.includes(id) ? current.filter(s => s !== id) : current.length < 3 ? [...current, id] : current);
  const download = () => { const a = document.createElement('a'); a.href = image; a.download = 'hattiesburg-hub-roundup.png'; a.click(); };
  const copy = async () => { try { await navigator.clipboard.writeText(caption); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { setError('Could not copy the caption. You can select and copy it below.'); } };
  return <div className="min-h-screen bg-background text-foreground">
    <SEOHead title="Roundup Studio" description="Create branded Hattiesburg Hub story roundups." path="/roundup" />
    <Navbar />
    <main className="container mx-auto px-4 pt-36 md:pt-32 pb-16">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6 mb-8">
        <div><p className="text-primary text-xs font-medium uppercase mb-2">Hattiesburg Hub</p><h1 className="font-display text-3xl font-bold">Roundup Studio</h1></div>
        <Button onClick={download} disabled={!image || busy}><Download />Download PNG</Button>
      </div>
      <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8">
        <section className="min-w-0">
          <div className="flex items-center justify-between mb-3"><h2 className="font-display font-semibold">Facebook graphic</h2><span className="text-xs text-muted-foreground">1200 × 630</span></div>
          <div className="relative aspect-[1200/630] bg-muted border border-border overflow-hidden rounded-md">
            <canvas ref={canvas} width={1200} height={630} aria-label="Branded roundup graphic preview" className={`w-full h-full ${image ? '' : 'invisible'}`} />
            {!image && <div role="status" className="absolute inset-0 flex items-center justify-center p-6 text-center text-muted-foreground"><ImagePlus className="w-5 h-5 mr-2 shrink-0" />{busy ? 'Creating graphic…' : 'Select three story photos'}</div>}
          </div>
          {error && <p role="alert" className="text-destructive mt-3 text-sm">{error}</p>}
          <div className="flex items-center justify-between mt-8 mb-3"><label htmlFor="roundup-caption" className="font-display font-semibold">Facebook caption</label><Button variant="outline" size="sm" onClick={copy}>{copied ? <Check /> : <Copy />}{copied ? 'Copied' : 'Copy caption'}</Button></div>
          <textarea id="roundup-caption" value={caption} onChange={e => setCaption(e.target.value)} className="w-full min-h-48 bg-background border border-input rounded-md p-4 text-sm leading-relaxed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
        </section>
        <section className="min-w-0">
          <label htmlFor="roundup-headline" className="font-display font-semibold block mb-3">Graphic headline</label>
          <Input id="roundup-headline" value={headline} maxLength={60} onChange={e => setHeadline(e.target.value)} />
          <div className="flex items-center justify-between mt-8 mb-4"><h2 className="font-display font-semibold">Recent stories</h2><span className="text-sm text-muted-foreground">{selected.length} / 3</span></div>
          <div className="space-y-3 max-h-[640px] overflow-y-auto pr-1">
            {recent.map(story => <label key={story.id} className="flex items-start gap-3 cursor-pointer border-b border-border pb-3">
              <input type="checkbox" checked={selected.includes(story.id)} disabled={!selected.includes(story.id) && selected.length === 3} onChange={() => toggle(story.id)} aria-label={story.title} className="mt-4 accent-primary shrink-0" />
              <img src={storyImageUrl(story.image)} alt="" className="w-16 h-14 object-cover rounded-sm shrink-0" />
              <span className="text-sm leading-snug"><span className="block font-medium">{story.title}</span><span className="block text-xs text-muted-foreground mt-1">{story.date}</span></span>
            </label>)}
          </div>
        </section>
      </div>
    </main><Footer />
  </div>;
}
