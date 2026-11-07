import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { sanityDataset, sanityProjectId } from "./posts";

export function urlFor(source: SanityImageSource) {
  if (!sanityProjectId) return null;
  return createImageUrlBuilder({ projectId: sanityProjectId, dataset: sanityDataset }).image(source);
}
