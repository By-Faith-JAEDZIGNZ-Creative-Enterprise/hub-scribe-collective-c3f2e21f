import { Link } from "react-router-dom";
import { categories } from "@/data/stories";
import { ArrowRight } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";
import JaeCrest from "@/components/JaeCrest";

const linkHead = "font-footer font-bold mb-6 text-xs uppercase tracking-widest text-footer-ink/50";
const linkItem = "font-footer text-sm text-footer-ink hover:underline underline-offset-4 transition-colors";

const Footer = () => {
  return (
    <footer className="bg-footer-ivory text-footer-ink border-t border-footer-ink font-footer">
      <div className="container mx-auto px-4 pt-12 pb-7">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="inline-block px-3 py-1 border border-footer-ink text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Independent Local Journalism
            </span>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:opacity-80 transition-opacity">
              <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
                Hattiesburg Hub
              </h2>
            </Link>
            <p className="text-xl md:text-2xl font-medium leading-tight mb-7 max-w-md">
              Stories that move the Hub City
            </p>
            <Link
              to="/category/community"
               className="group inline-flex items-center gap-3 bg-footer-ink text-footer-ivory px-6 py-3 font-bold hover:bg-footer-ink/90 transition-all"
            >
              <span>Read Latest</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Newsletter + links */}
          <div className="lg:col-span-7">
            <div className="mb-12">
              <NewsletterSignup variant="editorial" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className={linkHead}>Sections</h4>
                <ul className="space-y-3">
                  {categories.map((cat) => (
                    <li key={cat.slug}>
                      <Link to={`/category/${cat.slug}`} className={linkItem}>
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={linkHead}>About</h4>
                <ul className="space-y-3">
                  <li><Link to="/about" className={linkItem}>Our Mission</Link></li>
                  <li><Link to="/about#team" className={linkItem}>Our Team</Link></li>
                  <li><Link to="/contact" className={linkItem}>Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className={linkHead}>Get Involved</h4>
                <ul className="space-y-3">
                  <li><Link to="/contact#submit" className={linkItem}>Submit a Story</Link></li>
                  <li><Link to="/contact#advertise" className={linkItem}>Advertise</Link></li>
                  <li><Link to="/contact#advertise" className={linkItem}>Sponsor</Link></li>
                </ul>
              </div>
              <div>
                <h4 className={linkHead}>Legal</h4>
                <ul className="space-y-3">
                  <li><Link to="/privacy" className={linkItem}>Privacy Policy</Link></li>
                  <li><Link to="/terms" className={linkItem}>Terms of Use</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="border-t border-footer-ink/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-5 text-[10px] font-medium tracking-wider">
          <div className="flex items-center gap-4">
            <JaeCrest
              size={40}
              href="https://byfaithjaedzignzcreative.net/"
              className="drop-shadow-[0_2px_10px_hsl(217_91%_50%_/_0.25)]"
            />
            <div className="flex flex-col gap-0.5">
              <span>
                Designed by{" "}
                <a
                  href="https://byfaithjaedzignzcreative.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 font-bold hover:opacity-70 transition-opacity"
                >
                  By Faith JAEDZIGNZ Creative Enterprise
                </a>
              </span>
              <span className="opacity-60">Made with love in the Hub City</span>
            </div>
          </div>
          <div className="flex gap-8 uppercase">
            <span>&copy; 2026 Hattiesburg Hub</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
