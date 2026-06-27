import ContactSection from "./ContactSection";
import { generateStaticMetadata } from "@/lib/seoUtils";
import { PAGE_SEO } from "@/lib/seoConfig";
 
export const metadata = generateStaticMetadata(PAGE_SEO.contact);
export default function Page() {
  return <ContactSection />;
}
