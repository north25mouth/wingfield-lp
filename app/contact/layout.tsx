import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | ウイングフィールドジャパン",
  description: "ウイングフィールドジャパンへのお問い合わせ・無料お見積もりのご依頼はこちらから。",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
