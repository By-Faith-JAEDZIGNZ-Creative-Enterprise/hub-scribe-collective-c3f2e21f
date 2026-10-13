import { describe, expect, it } from "vitest";
import { stories } from "@/data/stories";
import { formatPhotoCredit } from "./photoCredit";

describe("Harrington Park photo attribution", () => {
  it("credits the supplied photo to Hattiesburg Public Schools", () => {
    const story = stories.find(item => item.slug === "smokie-harrington-park-baseball-renovations");
    expect(story?.photoSource).toBe("Hattiesburg Public Schools");
    expect(formatPhotoCredit(story ?? {})).toContain("Photo courtesy of Hattiesburg Public Schools.");
  });
});