# Portfolio Personalization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all Astrofy default placeholder content with Charles Guedenet's actual professional information across every page and component.

**Architecture:** Pure content replacement — no new components, no routing changes except removing the Store section entirely and Services from the sidebar nav. All edits are in existing `.astro` files, markdown content files, and one config file.

**Tech Stack:** Astro 4, TailwindCSS, DaisyUI, pnpm, Markdown content collections

---

## Files Modified

| File | Change |
|---|---|
| `src/config.ts` | Site title + description |
| `astro.config.mjs` | Site URL |
| `src/components/SideBarFooter.astro` | Social links (GitHub, LinkedIn; remove Twitter + "support") |
| `src/components/SideBarMenu.astro` | Contact email; remove Store & Services nav items |
| `src/pages/index.astro` | Name, tagline, bio, featured projects, CTA buttons |
| `src/pages/cv.astro` | Profile bio, education, experience, certifications, skills |
| `src/pages/projects.astro` | Real publications + speaking engagements |
| `src/content/blog/post1.md` | Delete |
| `src/content/blog/post2.md` | Delete |
| `src/content/blog/post3.md` | Delete |
| `src/content/store/item1.md` | Delete |
| `src/content/store/item2.md` | Delete |
| `src/content/store/item3.md` | Delete |
| `src/pages/store/[...page].astro` | Delete |
| `src/pages/store/[slug].astro` | Delete |
| `src/components/SideBar.astro` | Update image src to `profile.jpeg` |

---

## Task 1: Site Metadata

**Files:**
- Modify: `src/config.ts`
- Modify: `astro.config.mjs`

- [ ] **Step 1: Update `src/config.ts`**

Replace the entire file with:

```ts
export const SITE_TITLE = 'Charles Guedenet | Evaluation & MEL Leader';
export const SITE_DESCRIPTION = 'Strategy and evaluation leader with 15+ years of experience leading impact measurement for major non-profits. Expert in MEL frameworks, data systems, and organizational learning.';
export const GENERATE_SLUG_FROM_TITLE = true
export const TRANSITION_API = true
```

- [ ] **Step 2: Update site URL in `astro.config.mjs`**

Replace line 8:
```js
  site: 'https://astrofy-template.netlify.app',
```
with your actual deployed URL (e.g. `https://cguedenet.github.io` or your custom domain). If unknown yet, use a placeholder like `https://charlesguedenet.com` — this only affects sitemap generation and RSS feed links.

- [ ] **Step 3: Commit**

```bash
git add src/config.ts astro.config.mjs
git commit -m "chore: update site title, description, and URL"
```

---

## Task 2: Sidebar Social Links

**Files:**
- Modify: `src/components/SideBarFooter.astro`

- [ ] **Step 1: Replace `src/components/SideBarFooter.astro`**

Replace the entire file with the following (removes the "Support my work" icon and Twitter icon, updates GitHub and LinkedIn URLs, keeps RSS):

```astro
<div
    class="block sticky pointer-events-none bottom-10 bg-base-200 justify-center h-12 [mask-image:linear-gradient(transparent,#000000)]"
>
</div>

<div class="social-icons px-4 pb-5 pt-1 flex self-center justify-center sticky bottom-0 bg-base-200">
    <a href="https://github.com/cguedenet" target="_blank" class="mx-3" aria-label="Github" title="Github">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: currentColor;transform: ;msFilter:;"
            ><path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
            ></path>
        </svg>
    </a>
    <a
        href="https://www.linkedin.com/in/guedenet/"
        target="_blank"
        class="mx-3"
        aria-label="LinkedIn"
        title="LinkedIn"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: currentColor;transform: ;msFilter:;"
            ><circle cx="4.983" cy="5.009" r="2.188"></circle><path
                d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
            ></path>
        </svg>
    </a>
    <a href="/rss.xml" target="_blank" class="mx-3" aria-label="RSS Feed" title="RSS Feed">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: currentColor;transform: ;msFilter:;"
            ><path d="M19 20.001C19 11.729 12.271 5 4 5v2c7.168 0 13 5.832 13 13.001h2z"></path><path
                d="M12 20.001h2C14 14.486 9.514 10 4 10v2c4.411 0 8 3.589 8 8.001z"></path><circle cx="6" cy="18" r="2"
            ></circle>
        </svg>
    </a>
</div>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/SideBarFooter.astro
git commit -m "feat: update sidebar social links to GitHub and LinkedIn"
```

---

## Task 3: Sidebar Navigation

**Files:**
- Modify: `src/components/SideBarMenu.astro`

- [ ] **Step 1: Replace `src/components/SideBarMenu.astro`**

Remove Store and Services nav items, update contact email:

```astro
---
const { sideBarActiveItemID } = Astro.props;
const activeClass = "bg-base-300";
---

<ul class="menu grow shrink menu-md overflow-y-auto">
    <li><a class="py-3 text-base" id="home" href="/">Home</a></li>
    <li><a class="py-3 text-base" id="projects" href="/projects">Projects</a></li>
    <li><a class="py-3 text-base" id="blog" href="/blog/">Blog</a></li>
    <li><a class="py-3 text-base" id="cv" href="/cv">CV</a></li>
    <li>
        <a
            class="py-3 text-base"
            href="mailto:cguedenet@gmail.com"
            target="_blank"
            referrerpolicy="no-referrer-when-downgrade">Contact</a
        >
    </li>
</ul>

<script define:vars={{ sideBarActiveItemID: sideBarActiveItemID, activeClass: activeClass }}>
const activeItemElem = document.getElementById(sideBarActiveItemID);
activeItemElem && activeItemElem.classList.add(activeClass);
</script>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/SideBarMenu.astro
git commit -m "feat: update nav — remove Store/Services, update contact email"
```

---

## Task 4: Homepage

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Replace `src/pages/index.astro`**

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import HorizontalCard from "../components/HorizontalCard.astro";
import { getCollection } from "astro:content";
import createSlug from "../lib/createSlug"

const posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

const last_posts = posts.slice(0, 3);
---

<BaseLayout sideBarActiveItemID="home">
  <div class="pb-12 mt-5">
    <div class="text-xl py-1">Hey there 👋</div>
    <div class="text-5xl font-bold">I'm Charles Guedenet</div>
    <div class="text-3xl py-3 font-bold">Strategy & Evaluation Leader</div>
    <div class="py-2">
      <text class="text-lg">
        I'm an evaluation and learning professional with 15+ years of experience leading impact measurement for major non-profits.
        I specialize in building organization-wide MEL frameworks, data systems, and culturally responsive evaluation approaches
        that translate complex data into actionable insights.
      </text>
    </div>
    <div class="mt-8">
      <a class="btn" href="https://www.linkedin.com/in/guedenet/" target="_blank">Connect on LinkedIn</a>
      <a href="mailto:cguedenet@gmail.com" class="btn btn-outline ml-5">
        Get in Touch
      </a>
    </div>
  </div>

  <div>
    <div class="text-3xl w-full font-bold mb-2">Featured Work {"</>"}</div>
  </div>

  <HorizontalCard
    title="From Global Indicator Monitoring to Strategic Evaluation and Learning"
    img="/post_img.webp"
    desc="Case study for ActivityInfo on how a common MIS platform enables IREX's global MEL strategy. Published February 2023."
    url="https://www.activityinfo.org/blog/posts/2023-02-22-from-global-indicator-monitoring-to-strategic-evaluation-and-learning.html"
    badge="Case Study"
  />
  <div class="divider my-0"></div>
  <HorizontalCard
    title="Youth-Led Labor Market Assessment Framework and Guide"
    img="/post_img.webp"
    desc="Practical framework and guide for conducting youth-led labor market assessments. Published by IREX, 2019."
    url="https://www.irex.org/resource/youth-led-labor-market-assessment-framework-and-guide"
  />
  <div class="divider my-0"></div>
  <HorizontalCard
    title="Up Your Data Game: Using R to Wrangle, Analyze, and Visualize Data"
    img="/post_img.webp"
    desc="Training session presented at MERL Tech DC 2018 on leveraging R for faster and better MEL data analysis."
    url="#"
    badge="Talk"
  />

  {last_posts.length > 0 && (
    <div>
      <div class="text-3xl w-full font-bold mb-5 mt-10">Latest from blog</div>
    </div>
  )}

  {
    last_posts.map((post) => (
      <>
        <HorizontalCard
          title={post.data.title}
          img={post.data.heroImage}
          desc={post.data.description}
          url={"/blog/" + createSlug(post.data.title, post.slug)}
          target="_self"
          badge={post.data.badge}
        />
        <div class="divider my-0" />
      </>
    ))
  }
</BaseLayout>
```

> **Note:** The ActivityInfo and IREX URLs above are the real published locations based on the resume. Verify them and update `url="#"` on the MERL Tech talk once you have the actual link.

- [ ] **Step 2: Start dev server and visually verify homepage**

```bash
pnpm dev
```

Open http://localhost:4321 — confirm name, title, bio, and 3 featured work cards display correctly. Stop the server with Ctrl+C.

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: personalize homepage with Charles Guedenet's info"
```

---

## Task 5: CV Page

**Files:**
- Modify: `src/pages/cv.astro`

- [ ] **Step 1: Replace `src/pages/cv.astro`**

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import TimeLineElement from "../components/cv/TimeLine.astro";
---

<BaseLayout title="CV" sideBarActiveItemID="cv">
  <div class="mb-5">
    <div class="text-3xl w-full font-bold">Profile</div>
  </div>

  <div class="mb-10 text-justify">
    Strategy and evaluation leader with 15+ years of experience leading impact measurement for major non-profits.
    Expert in building organization-wide measurement frameworks and culturally responsive evaluation systems.
    Proven leader in translating complex data into actionable insights to drive organizational strategy and growth.
  </div>

  <div class="mb-5">
    <div class="text-3xl w-full font-bold">Education</div>
  </div>

  <div class="time-line-container grid gap-4 mb-10">
    <TimeLineElement
      title="Ph.D. in Evaluation, Measurement, and Research (in progress)"
      subtitle="September 2023 – Present at Western Michigan University, Remote"
    />
    <TimeLineElement
      title="M.A. in International Development Studies"
      subtitle="2007 to 2009 at The George Washington University, Elliott School of International Affairs, Washington, D.C."
    />
    <TimeLineElement
      title="B.A. in International Studies — Highest Honors, Departmental Distinction"
      subtitle="1999 to 2003 at Kenyon College, Gambier, OH"
    />
  </div>

  <div class="mb-5">
    <div class="text-3xl w-full font-bold">Experience</div>
  </div>

  <div class="time-line-container mb-10">
    <TimeLineElement
      title="Director of Evaluation"
      subtitle="May 2024 – February 2026 at AARP Foundation, Washington, D.C."
    >
      Led a team of four evaluators and data analysts providing internal teams with technical assistance in evaluation study design, indicator development, and learning activities. Drove analyses and reporting on program performance data for executive leadership. Led development of measurement frameworks for the Foundation's 2030 strategy, including theories of change, logic models, and indicators across program portfolios. Oversaw a quasi-experimental evaluation of Experience Corps' volunteer tutoring model on K-3 student literacy outcomes.
    </TimeLineElement>
    <TimeLineElement
      title="Senior Technical Advisor, Monitoring, Evaluation, and Learning"
      subtitle="September 2013 – 2024 at Center for Applied Learning and Impact (CALI), IREX, Washington, D.C."
    >
      Lead architect of a centralized information management system for gathering, managing, and reporting organization-wide data. Co-led the design and implementation of a cross-program evaluation of IREX's 2025 strategy. Directed large-scale media audience research for a $26 million independent media program in Syria using mixed methods. Conducted 15+ professional development workshops elevating staff expertise in MEL practices.
    </TimeLineElement>
    <TimeLineElement
      title="Team Lead, Ford Global Fellowship Learning & Evaluation"
      subtitle="January 2020 – December 2023 at IREX, Washington, D.C."
    >
      Technical and strategic lead for the hybrid developmental evaluation of the Ford Foundation Global Fellowship program, a flagship program for social justice leaders. Managed a $1 million budget and a team of MEL experts in a grounded theory study of power-sharing and program co-design. Designed and led implementation of an Outcome Harvesting evaluation.
    </TimeLineElement>
    <TimeLineElement
      title="Field Technical Advisor, Pact Zimbabwe"
      subtitle="January 2013 – September 2013 at Pact, Inc., Harare, Zimbabwe"
    >
      Provided training and mentoring to staff and grantees in organizational capacity assessments, database management, and GIS mapping. Developed logical frameworks, theories of change, and M&E plans for local grantees focused on advocacy, community development, and human rights.
    </TimeLineElement>
    <TimeLineElement
      title="Program Officer"
      subtitle="May 2008 – December 2012 at Pact, Inc., Washington, D.C."
    >
      Founded a Pact Community of Practice for ICT and created an intranet knowledge-sharing site. Provided training in ICT, project design, and program M&E to field offices and HQ staff. Co-designed Organization Capacity Assessment (OCA) and Organizational Network Analysis (ONA) methods for an independent media strengthening project in Afghanistan.
    </TimeLineElement>
  </div>

  <div class="mb-5">
    <div class="text-3xl w-full font-bold">Certifications & Training</div>
  </div>

  <ul class="list-disc mx-6 mb-10 grid gap-2">
    <li>Applied Multiple Regression (2016) — The Evaluation Institute</li>
    <li>Program Information Management (2013) — PM4Dev</li>
    <li>Training of Trainers (2011) — InsideNGO</li>
  </ul>

  <div class="mb-5">
    <div class="text-3xl w-full font-bold">Skills</div>
  </div>

  <ul class="list-disc md:columns-5 columns-2 mx-6">
    <li>Program Evaluation</li>
    <li>MEL Frameworks</li>
    <li>Logic Models</li>
    <li>Theories of Change</li>
    <li>Mixed Methods</li>
    <li>Outcome Harvesting</li>
    <li>Data Systems</li>
    <li>R Programming</li>
    <li>Power BI</li>
    <li>GIS / Mapping</li>
    <li>SNA Software</li>
    <li>SPSS</li>
    <li>Salesforce</li>
    <li>Dedoose</li>
    <li>Alchemer</li>
    <li>Excel</li>
    <li>English (Native)</li>
    <li>French (Fluent)</li>
  </ul>
</BaseLayout>
```

- [ ] **Step 2: Verify CV page**

```bash
pnpm dev
```

Open http://localhost:4321/cv — confirm all sections (Profile, Education, Experience, Certifications, Skills) display correctly. Stop server.

- [ ] **Step 3: Commit**

```bash
git add src/pages/cv.astro
git commit -m "feat: populate CV with Charles Guedenet's full professional history"
```

---

## Task 6: Projects Page

**Files:**
- Modify: `src/pages/projects.astro`

- [ ] **Step 1: Replace `src/pages/projects.astro`**

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import HorizontalCard from "../components/HorizontalCard.astro";
---

<BaseLayout title="Projects" sideBarActiveItemID="projects">
  <div>
    <div class="text-3xl w-full font-bold mb-5">Publications</div>
  </div>

  <HorizontalCard
    title="From Global Indicator Monitoring to Strategic Evaluation and Learning"
    img="/post_img.webp"
    desc="Case study on how a common MIS platform enables IREX's global MEL strategy. ActivityInfo, February 2023."
    url="https://www.activityinfo.org/blog/posts/2023-02-22-from-global-indicator-monitoring-to-strategic-evaluation-and-learning.html"
    badge="Case Study"
  />
  <div class="divider my-0"></div>
  <HorizontalCard
    title="Youth-Led Labor Market Assessment Framework and Guide"
    img="/post_img.webp"
    desc="Practical guide for conducting youth-led labor market assessments. IREX, 2019."
    url="https://www.irex.org/resource/youth-led-labor-market-assessment-framework-and-guide"
  />
  <div class="divider my-0"></div>
  <HorizontalCard
    title="Labor Market Report: University Linkages Program"
    img="/post_img.webp"
    desc="Research report on labor market trends for the University Linkages Program. IREX, January 2017."
    url="#"
  />

  <div>
    <div class="text-3xl w-full font-bold mb-5 mt-10">Speaking Engagements</div>
  </div>

  <HorizontalCard
    title="Making Information Management and M&E Work at a Global Level"
    img="/post_img.webp"
    desc="Panelist at ActivityInfo webinar sharing insights from ACDI/VOCA and IREX. February 22, 2023."
    url="#"
    badge="Panel"
  />
  <div class="divider my-0"></div>
  <HorizontalCard
    title="Up Your Data Game: Using R to Wrangle, Analyze, and Visualize Data"
    img="/post_img.webp"
    desc="Trainer session at MERL Tech DC on R for MEL data analysis. September 7, 2018."
    url="#"
    badge="Training"
  />
  <div class="divider my-0"></div>
  <HorizontalCard
    title="Why Implement an Organization-Wide M&E Technology Platform"
    img="/post_img.webp"
    desc="Chair and panelist at the American Evaluation Association Conference on challenges and lessons learned. 2014."
    url="#"
    badge="AEA"
  />
</BaseLayout>
```

> **Note:** Replace `url="#"` entries with real links when available.

- [ ] **Step 2: Commit**

```bash
git add src/pages/projects.astro
git commit -m "feat: replace demo projects with publications and speaking engagements"
```

---

## Task 7: Remove Store Section

**Files:**
- Delete: `src/content/store/item1.md`, `item2.md`, `item3.md`
- Delete: `src/pages/store/[...page].astro`
- Delete: `src/pages/store/[slug].astro`

- [ ] **Step 1: Delete store content files**

```bash
rm src/content/store/item1.md src/content/store/item2.md src/content/store/item3.md
```

- [ ] **Step 2: Delete store pages**

```bash
rm src/pages/store/\[...page\].astro src/pages/store/\[slug\].astro
rmdir src/pages/store
```

- [ ] **Step 3: Verify build still succeeds**

```bash
pnpm build
```

Expected: Build completes with no errors. The store routes will simply not exist.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: remove store section and all demo store content"
```

---

## Task 8: Clear Demo Blog Posts

**Files:**
- Delete: `src/content/blog/post1.md`, `post2.md`, `post3.md`

- [ ] **Step 1: Delete demo blog posts**

```bash
rm src/content/blog/post1.md src/content/blog/post2.md src/content/blog/post3.md
```

- [ ] **Step 2: Verify blog page renders empty state**

```bash
pnpm dev
```

Open http://localhost:4321/blog — confirm the page loads without errors (empty list is fine). The homepage's "Latest from blog" section will also disappear automatically since `last_posts` will be empty. Stop server.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove demo blog posts"
```

---

## Task 9: Profile Photo

**Files:**
- Modify: `src/components/SideBar.astro`

`public/profile.jpeg` already exists. Just update the sidebar component to reference it instead of `profile.webp`.

- [ ] **Step 1: Update image src in `src/components/SideBar.astro`**

Find line 15:
```astro
<Image class="mask mask-circle" format="webp" width={300} height={300} src="/profile.webp" alt="Profile image" />
```

Replace with:
```astro
<Image class="mask mask-circle" width={300} height={300} src="/profile.jpeg" alt="Profile image of Charles Guedenet" />
```

- [ ] **Step 2: Verify photo appears in sidebar**

```bash
pnpm dev
```

Open http://localhost:4321 and confirm your headshot appears in the sidebar circle. Stop server.

- [ ] **Step 3: Commit**

```bash
git add src/components/SideBar.astro
git commit -m "feat: use profile.jpeg headshot in sidebar"
```

---

## Task 10: Final Build Verification

- [ ] **Step 1: Run full production build**

```bash
pnpm build
```

Expected output ends with something like:
```
✓ Completed in X.XXs.
```
No errors or warnings about missing images or broken routes.

- [ ] **Step 2: Preview production build**

```bash
pnpm preview
```

Open http://localhost:4321 and navigate through: Home → CV → Projects → Blog. Confirm all pages load correctly with your content.

- [ ] **Step 3: Done**

The site is ready to deploy. Common free hosting options:
- **GitHub Pages:** `pnpm build` → push `dist/` to `gh-pages` branch
- **Netlify:** connect repo, set build command to `pnpm build`, publish dir to `dist`
- **Vercel:** connect repo, framework preset = Astro
