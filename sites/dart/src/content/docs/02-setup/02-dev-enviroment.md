---

title: Development Enviroment
description: "Virtual devices can be created by opening the command-palette and selecting And selecting . However, the performance is not Accurate and convenience is"
date: 2025-07-13T19:11:38.762Z
tags:
  - dart
categories:
  - dart

---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "dart", "url": "https://dart.wyattau.com"}, {"name": "02 Setup", "url": "https://dart.wyattau.com/02-setup"}, {"name": "02 Dev Enviroment", "url": "https://dart.wyattau.com/02-setup/02-dev-enviroment"}]
}
</script>

## Virtual Devices

Virtual devices can be created by opening the command-palette and selecting
`Flutter: Select Device`And selecting `create android emulator`. However, the performance is not
Accurate and convenience is limited, therefore I recommend using a
[physical device](#physical-devices).

## Physical Devices

Android devices can be use for running builds by enabling `USB debugging` from
`Android developer settings`This is done by:

1. Open settings and navigate to About Phone
2. Tab on the build number 7 times until a confirmation message appear
3. Then enter Developer Options and enable `USB debugging`
4. Plug the phone into the computer with USB connection

Now when selecting VSCode/command-palette/`Flutter: Select Device`The identifier of the phone will
Appear.
