import { site } from "@/lib/site-config";

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function nl2br(value: string) {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

/**
 * Wraps email body content in the site's navy/gold/cream theme.
 * Table-based layout with inline styles for compatibility across email
 * clients (Outlook's Word rendering engine in particular ignores flexbox,
 * grid, and CSS transforms, so the ornament below is a plain table, not
 * the rotated-square div the site itself uses).
 */
export function renderEmailLayout({
  preheader,
  bodyHtml,
}: {
  preheader: string;
  bodyHtml: string;
}) {
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(site.name)}</title>
  </head>
  <body style="margin:0; padding:0; background-color:#faf6ef;">
    <div style="display:none; max-height:0; overflow:hidden; opacity:0; font-size:1px; line-height:1px; color:#faf6ef;">
      ${escapeHtml(preheader)}
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#faf6ef;">
      <tr>
        <td align="center" style="padding: 32px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px; background-color:#ffffff; border-radius:12px; border:1px solid #dbe1eb;">
            <tr>
              <td style="height:4px; line-height:4px; font-size:0; border-radius:12px 12px 0 0; background-color:#b3893f;">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding: 32px 40px 0 40px; text-align:center;">
                <div style="font-family: Georgia, 'Times New Roman', serif; font-size: 22px; font-weight:600; color:#1f2c45;">
                  ${escapeHtml(site.name)}
                </div>
                <div style="margin-top: 6px; font-family: Arial, Helvetica, sans-serif; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color:#8c6529;">
                  Waterville, Minnesota
                </div>
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 18px auto 0;">
                  <tr>
                    <td style="width:24px; height:1px; line-height:1px; font-size:0; background-color:#d3ac6a;">&nbsp;</td>
                    <td style="width:16px; text-align:center; color:#b3893f; font-size:11px;">&#10070;</td>
                    <td style="width:24px; height:1px; line-height:1px; font-size:0; background-color:#d3ac6a;">&nbsp;</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 24px 40px 32px 40px; font-family: Arial, Helvetica, sans-serif; color:#211f1c; font-size:15px; line-height:1.65;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding: 22px 40px; background-color:#1f2c45; border-radius:0 0 12px 12px; text-align:center;">
                <div style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; color:#c2cbdc; line-height:1.7;">
                  ${escapeHtml(site.name)}<br />
                  ${escapeHtml(site.address.line1)}<br />
                  ${escapeHtml(site.address.line2)}<br />
                  <a href="${site.phoneHref}" style="color:#d3ac6a; text-decoration:none;">${escapeHtml(site.phone)}</a>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function emailHeading(text: string) {
  return `<div style="font-family: Georgia, 'Times New Roman', serif; font-size:19px; font-weight:600; color:#1f2c45; margin-bottom:16px;">${escapeHtml(
    text
  )}</div>`;
}

export function emailQuoteBlock(text: string) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin: 16px 0; background-color:#faf6ef;">
    <tr>
      <td style="width:3px; background-color:#b3893f; font-size:0; line-height:0;">&nbsp;</td>
      <td style="padding: 14px 18px; font-family: Arial, Helvetica, sans-serif; font-size:14px; color:#524d45; line-height:1.6;">
        ${nl2br(text)}
      </td>
    </tr>
  </table>`;
}

export function emailFieldRow(label: string, value: string) {
  return `<tr>
    <td style="padding: 6px 0; font-family: Arial, Helvetica, sans-serif; font-size:12px; letter-spacing:0.04em; text-transform:uppercase; color:#8c6529; width:110px; vertical-align:top;">${escapeHtml(
      label
    )}</td>
    <td style="padding: 6px 0; font-family: Arial, Helvetica, sans-serif; font-size:15px; color:#211f1c; vertical-align:top;">${escapeHtml(
      value
    )}</td>
  </tr>`;
}
