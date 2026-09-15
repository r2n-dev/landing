import path from "node:path";
import { Document, Font, Image, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
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
  contactPair: { flexDirection: "row" },
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
  job: { marginBottom: 9 },
  rowBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" },
  jobRole: { fontSize: 10.5, fontWeight: 700 },
  roleSeparator: { color: palette.muted, fontWeight: 400 },
  company: { color: palette.primary, textDecoration: "none", fontWeight: 600 },
  meta: { fontSize: 8.5, color: palette.muted },
  paragraph: { fontSize: 9.5, lineHeight: 1.45, marginTop: 2 },
  bullet: { flexDirection: "row", marginTop: 1.5, paddingLeft: 2 },
  bulletMark: { width: 10, color: palette.primary },
  bulletText: { flex: 1, fontSize: 9.5, lineHeight: 1.45 },
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
      { label: profile.location },
      { label: profile.email, href: `mailto:${profile.email}` },
      { label: profile.phone, href: profile.links.whatsapp.href },
    ],
    [profile.links.linkedin, profile.links.github, profile.links.website].map((link) => ({
      label: stripProtocol(link.href),
      href: link.href,
    })),
  ];

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
