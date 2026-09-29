import path from "node:path";
import { Document, Font, Image, Link, Page, Path, StyleSheet, Svg, Text, View } from "@react-pdf/renderer";
import type { LandingLocale } from "@/components/landing/i18n";
import type { LandingContent } from "@/components/landing/landing.types";
import type { CandidateProfile } from "@/components/landing/profile-data";

/*
 * react-pdf renders outside the DOM, so Tailwind tokens are unavailable here.
 * The palette below mirrors the light-scheme tokens in src/app/globals.css.
 */
const palette = {
  primary: "#3b95ff",
  text: "#111418",
  muted: "#5c6470",
  rule: "#dfe3e8",
  chip: "#eef5ff",
};

const fontsDir = path.join(process.cwd(), "src/assets/fonts");

Font.register({
  family: "Manrope",
  fonts: [
    { src: path.join(fontsDir, "Manrope-Regular.ttf"), fontWeight: 400 },
    { src: path.join(fontsDir, "Manrope-SemiBold.ttf"), fontWeight: 600 },
    { src: path.join(fontsDir, "Manrope-Bold.ttf"), fontWeight: 700 },
    { src: path.join(fontsDir, "Manrope-ExtraBold.ttf"), fontWeight: 800 },
  ],
});
// Keep words whole instead of hyphenating them across lines.
Font.registerHyphenationCallback((word) => [word]);

const styles = StyleSheet.create({
  page: {
    fontFamily: "Manrope",
    fontSize: 9.5,
    color: palette.text,
    paddingTop: 40,
    paddingBottom: 48,
    paddingHorizontal: 44,
  },
  /*
   * lineHeight is set per text style with an explicit fontSize (it resolves against the default size otherwise).
   * On the page it hides the page-number render text, and on a wrapping View it breaks pagination.
   */
  prose: { fontSize: 9.5, lineHeight: 1.45 },
  header: { marginBottom: 14 },
  name: { fontSize: 24, fontWeight: 800, lineHeight: 1.1, letterSpacing: -0.3 },
  role: { fontSize: 12, fontWeight: 600, color: palette.primary, marginTop: 3 },
  contactRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 8, color: palette.muted },
  contactRowNext: { flexDirection: "row", flexWrap: "wrap", marginTop: 1, color: palette.muted },
  contactPair: { flexDirection: "row", alignItems: "center" },
  contactIcon: { marginRight: 3 },
  contactItem: { color: palette.muted, textDecoration: "none" },
  separator: { marginHorizontal: 5, color: palette.rule },
  section: { marginTop: 12 },
  sectionTitle: {
    fontSize: 8.5,
    fontWeight: 700,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    color: palette.primary,
    paddingBottom: 3,
    marginBottom: 7,
    borderBottomWidth: 1,
    borderBottomColor: palette.rule,
  },
  job: { marginBottom: 13 },
  rowBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" },
  jobRole: { fontSize: 10.5, fontWeight: 700 },
  roleSeparator: { color: palette.muted, fontWeight: 400 },
  company: { color: palette.primary, textDecoration: "none", fontWeight: 600 },
  meta: { fontSize: 8.5, color: palette.muted, marginTop: 1 },
  paragraph: { fontSize: 9.5, lineHeight: 1.55, marginTop: 4 },
  bullet: { flexDirection: "row", marginTop: 3, paddingLeft: 2 },
  bulletMark: { width: 10, color: palette.primary },
  bulletText: { flex: 1, fontSize: 9.5, lineHeight: 1.55 },
  certRow: { flexDirection: "row", alignItems: "center" },
  badge: { width: 34, height: 34, marginRight: 9 },
  link: { color: palette.primary, textDecoration: "none" },
  chips: { flexDirection: "row", flexWrap: "wrap", marginTop: 2 },
  chip: {
    fontSize: 8.5,
    backgroundColor: palette.chip,
    borderRadius: 3,
    paddingVertical: 1.5,
    paddingHorizontal: 5,
    marginRight: 4,
    marginBottom: 4,
  },
  skillLabel: { fontWeight: 700, marginBottom: 2 },
  skillGroup: { marginBottom: 5 },
  footer: {
    position: "absolute",
    bottom: 22,
    fontSize: 7.5,
    color: palette.muted,
  },
});

/* Tabler outline icon paths (24x24 viewBox), drawn with react-pdf SVG primitives. */
const contactIcons = {
  location: [
    "M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",
    "M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z",
  ],
  email: [
    "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",
    "M3 7l9 6l9 -6",
  ],
  phone: [
    "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2",
  ],
  linkedin: [
    "M8 11v5",
    "M8 8v.01",
    "M12 16v-5",
    "M16 16v-3a2 2 0 0 0 -4 0",
    "M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z",
  ],
  github: [
    "M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",
  ],
  website: [
    "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",
    "M3.6 9h16.8",
    "M3.6 15h16.8",
    "M11.5 3a17 17 0 0 0 0 18",
    "M12.5 3a17 17 0 0 1 0 18",
  ],
} as const;

type ContactIcon = keyof typeof contactIcons;

function ContactGlyph({ name }: { name: ContactIcon }) {
  return (
    <Svg viewBox="0 0 24 24" width={9} height={9} style={styles.contactIcon}>
      {contactIcons[name].map((d) => (
        <Path
          key={d}
          d={d}
          stroke={palette.muted}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      ))}
    </Svg>
  );
}

function stripProtocol(href: string) {
  return href.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      {/* minPresenceAhead keeps a title from being stranded at the bottom of a page */}
      <Text style={styles.sectionTitle} minPresenceAhead={40}>
        {title}
      </Text>
      {children}
    </View>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <View style={styles.chips}>
      {items.map((item) => (
        <Text key={item} style={styles.chip}>
          {item}
        </Text>
      ))}
    </View>
  );
}

export interface ResumeDocumentProps {
  locale: LandingLocale;
  content: LandingContent;
  profile: CandidateProfile;
}

export function ResumeDocument({ locale, content, profile }: ResumeDocumentProps) {
  const isSpanish = locale === "es";
  const contactRows = [
    [
      { icon: "location", label: profile.location },
      { icon: "email", label: profile.email, href: `mailto:${profile.email}` },
      { icon: "phone", label: profile.phone, href: profile.links.whatsapp.href },
    ],
    (
      [
        ["linkedin", profile.links.linkedin],
        ["github", profile.links.github],
        ["website", profile.links.website],
      ] as const
    ).map(([icon, link]) => ({
      icon,
      label: stripProtocol(link.href),
      href: link.href,
    })),
  ] satisfies { icon: ContactIcon; label: string; href?: string }[][];

  return (
    <Document
      title={`${profile.name} — ${isSpanish ? "Hoja de vida" : "Resume"}`}
      author={profile.name}
      subject={content.role}
      keywords={profile.skills.technical.join(", ")}
      language={locale}
    >
      <Page size="LETTER" style={styles.page}>
        <Text style={[styles.footer, { left: 44 }]} fixed>
          {profile.name}
        </Text>
        <Text
          style={[styles.footer, { left: 44, right: 44, textAlign: "right" }]}
          fixed
          render={({ pageNumber, totalPages }) =>
            `${isSpanish ? "Página" : "Page"} ${pageNumber} / ${totalPages}`
          }
        />
        <View style={styles.header}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.role}>{content.role}</Text>
          {contactRows.map((row, rowIndex) => (
            <View key={rowIndex} style={rowIndex === 0 ? styles.contactRow : styles.contactRowNext}>
              {row.map((contact, index) => (
                <View key={contact.label} style={styles.contactPair}>
                  {index > 0 ? <Text style={styles.separator}>|</Text> : null}
                  <ContactGlyph name={contact.icon} />
                  {contact.href ? (
                    <Link src={contact.href} style={styles.contactItem}>
                      {contact.label}
                    </Link>
                  ) : (
                    <Text>{contact.label}</Text>
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>

        <Section title={isSpanish ? "Perfil" : "Profile"}>
          <Text style={styles.prose}>{profile.summary[locale]}</Text>
        </Section>

        <Section title={content.sections.experienceTitle}>
          {content.experience.map((item) => (
            <View key={`${item.company}-${item.period}`} style={styles.job} wrap={false}>
              <View style={styles.rowBetween}>
                <Text style={styles.jobRole}>
                  {item.role}
                  <Text style={styles.roleSeparator}>{"  ·  "}</Text>
                  {item.companyUrl ? (
                    <Link src={item.companyUrl} style={styles.company}>
                      {item.company}
                    </Link>
                  ) : (
                    <Text style={styles.company}>{item.company}</Text>
                  )}
                </Text>
                <Text style={styles.meta}>{item.period}</Text>
              </View>
              {item.location ? <Text style={styles.meta}>{item.location}</Text> : null}
              <Text style={styles.paragraph}>{item.summary}</Text>
              {item.highlights?.map((highlight) => (
                <View key={highlight} style={styles.bullet}>
                  <Text style={styles.bulletMark}>•</Text>
                  <Text style={styles.bulletText}>{highlight}</Text>
                </View>
              ))}
              {item.aiUsage ? (
                <Text style={styles.paragraph}>
                  <Text style={{ fontWeight: 700 }}>{content.sections.experienceAiUsageLabel}: </Text>
                  {item.aiUsage}
                </Text>
              ) : null}
              {item.stack?.length ? (
                <Text style={styles.meta}>
                  <Text style={{ fontWeight: 700 }}>{content.sections.experienceStackLabel}: </Text>
                  {item.stack.join(", ")}
                </Text>
              ) : null}
            </View>
          ))}
        </Section>

        <View wrap={false}>
          <Section title={content.sections.educationTitle}>
            {content.education.items.map((item) => (
              <View key={item.institution} style={styles.rowBetween}>
                <Text>
                  <Text style={{ fontWeight: 700 }}>{item.degree}</Text> — {item.institution}, {item.location}
                </Text>
                <Text style={styles.meta}>{item.period}</Text>
              </View>
            ))}
          </Section>
        </View>

        <View wrap={false}>
          <Section title={content.sections.certificationsTitle}>
            {profile.certifications.map((cert, index) => {
              const localized = content.certifications.items[index];
              return (
                <View key={cert.verificationUrl} style={styles.certRow}>
                  {/* react-pdf images have no alt attribute */}
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <Image style={styles.badge} src={path.join(process.cwd(), "public", cert.badgeImageUrl)} />
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: 700 }}>{cert.name}</Text>
                    <Text style={styles.meta}>
                      {cert.issuer} · {localized.validity} ·{" "}
                      <Link src={cert.verificationUrl} style={styles.link}>
                        {content.certifications.verifyLabel}
                      </Link>
                    </Text>
                  </View>
                </View>
              );
            })}
          </Section>
        </View>

        <View wrap={false}>
          <Section title={content.skills.title}>
            <View style={styles.skillGroup}>
              <Text style={styles.skillLabel}>{content.skills.technicalLabel}</Text>
              <Chips items={content.skills.technical} />
            </View>
            <View style={styles.skillGroup}>
              <Text style={styles.skillLabel}>{content.skills.softLabel}</Text>
              <Chips items={content.skills.soft} />
            </View>
            <View style={styles.skillGroup}>
              <Text style={styles.skillLabel}>{content.skills.languagesLabel}</Text>
              <Chips items={content.skills.languages.map((l) => `${l.language} · ${l.levels.join(", ")}`)} />
            </View>
          </Section>
        </View>
      </Page>
    </Document>
  );
}
