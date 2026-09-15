import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconHeart,
  IconMail,
} from "@tabler/icons-react";

interface PageFooterProps {
  name: string;
  email: string;
  linkedinHref: string;
  githubHref: string;
  whatsappHref: string;
  madeWithLabel: string;
  inCountryLabel: string;
}

const linkClassName =
  "inline-flex items-center gap-1 text-sm text-muted-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export function PageFooter({
  name,
  email,
  linkedinHref,
  githubHref,
  whatsappHref,
  madeWithLabel,
  inCountryLabel,
}: PageFooterProps) {
  return (
    <footer className="border-t border-border py-5">
      <div className="mx-auto max-w-page px-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} {name}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href={`mailto:${email}`} className={linkClassName}>
              <IconMail size={16} />
              <span>{email}</span>
            </a>
            <a href={linkedinHref} target="_blank" rel="noreferrer" className={linkClassName}>
              <IconBrandLinkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a href={githubHref} target="_blank" rel="noreferrer" className={linkClassName}>
              <IconBrandGithub size={16} />
              <span>GitHub</span>
            </a>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className={linkClassName}>
              <IconBrandWhatsapp size={16} />
              <span>WhatsApp</span>
            </a>
          </div>
          <div className="flex flex-nowrap items-center gap-1">
            <p className="text-xs text-muted-foreground">{madeWithLabel}</p>
            <IconHeart size={14} className="text-muted-foreground" />
            <p className="text-xs text-muted-foreground">{inCountryLabel}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
