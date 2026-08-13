/**
 * Full text of the 50 press articles, republished on this site rather than
 * linked out to the legacy WordPress install.
 *
 * Scraped from texansforfinancialchoice.com. Body text is stored as segments —
 * plain, or carrying an `href` — instead of raw HTML, so it renders as ordinary
 * React nodes and never needs dangerouslySetInnerHTML on markup we don't
 * control.
 *
 * `slug` reuses the legacy URL slug, so an old inbound link to
 * /some-article/ maps to /press/some-article.
 */

export type Segment = { text: string; href?: string };

export type Article = {
  slug: string;
  /** Where the piece originally ran, when the legacy page credited one. */
  source?: { name?: string; href?: string };
  paragraphs: Segment[][];
};

export const articles: Record<string, Article> = {
  'opinion-how-payday-loan-restrictions-can-hurt-the-people-theyre-meant-to-help':
    {
      slug: 'opinion-how-payday-loan-restrictions-can-hurt-the-people-theyre-meant-to-help',
      paragraphs: [
        [
          { text: 'Original Article by' },
          {
            text: 'Anchorage Daily News',
            href: 'https://www.adn.com/opinions/2025/08/25/opinion-how-payday-loan-restrictions-can-hurt-the-people-theyre-meant-to-help/',
          },
        ],
        [
          { text: 'Trevor Storrs’s recent op-ed (“' },
          {
            text: 'Predatory lending in disguise — the truth about payday loans in Alaska',
            href: 'https://www.adn.com/opinions/2025/08/16/opinion-predatory-lending-in-disguise-the-truth-about-payday-loans-in-alaska/',
          },
          {
            text: '”) repeats the familiar talking points: payday loans are “seawater to the thirsty,” caps at 36% are “reasonable,” and restrictions somehow encourage “safer” credit alternatives. It’s a compelling soundbite. But after years of studying these issues in states like New Mexico, Illinois, Minnesota and beyond, I can tell you this: the real harm comes not from allowing access to small-dollar loans, but from banning them.',
          },
        ],
        [
          {
            text: 'We’ve heard it before: banks and credit unions supposedly provide the “safe, regulated alternatives” that rate-cap advocates champion. The reality? The products are often advertised, but rarely delivered. In Minnesota, two college students, perfect examples of borrowers who might need a few hundred dollars to cover an emergency car repair or travel home for a family crisis, were',
          },
          {
            text: 'turned away',
            href: 'https://southwestpolicy.com/report-no-loan-for-you-too/',
          },
          { text: 'by every bank they tried. Even well-qualified borrowers,' },
          {
            text: 'including myself',
            href: 'https://southwestpolicy.com/report-no-loan-for-you/',
          },
          {
            text: 'with an 800+ credit score, were denied by both banks and credit unions.',
          },
        ],
        [
          {
            text: 'When policymakers force a 36% APR cap, the supply of legal credit collapses. That’s precisely what happened in New Mexico after House Bill 132 took effect in 2023. Lenders shuttered, “buy now, pay later” services exited, and thousands of consumers were left with no legal borrowing options. But the demand for emergency credit didn’t disappear. Instead, borrowers were driven underground into black-market lending schemes. One example saw Native American employees of a caregiving company trapped in the most egregious example of the',
          },
          {
            text: 'cycle of debt',
            href: 'https://southwestpolicy.com/report-black-market-payday/',
          },
          {
            text: 'I have ever seen: loans exceeding 2,700% APR, repayments deducted straight from their paychecks, while',
          },
          {
            text: 'regulators looked the other way',
            href: 'https://www.santafenewmexican.com/news/local_news/former-lawmaker-accused-of-lending-scheme-vows-to-go-after-accuser/article_8ddf66cd-116f-4549-8298-02ec3031c4ce.html',
          },
          { text: '.' },
        ],
        [{ text: 'That’s the unintended consequence of “protection.”' }],
        [
          {
            text: 'Mr. Storrs cites APR figures as if borrowers take out these loans for 12 months. They don’t. Most payday loans are repaid within weeks, and the cost is transparent. Compare that to the hidden overdraft fees or late payment penalties at mainstream banks, which often exceed what borrowers would pay at a storefront lender. Surveys consistently show that 95% of payday borrowers value the option, and the overwhelming majority are satisfied with their last loan.',
          },
        ],
        [
          {
            text: 'In our earlier payday example, the math highlights why APR is such an ineffective mechanism for determining the cost of short-term loans. One employee borrowed $125, paid a $10 fee, and paid back the loan one day later on payday. Some ATMs charge more than that. It’s a $10 fee. The reality is that a price control eliminated every other legal option, leaving borrowers with no choice but to turn to their abusive employer.',
          },
        ],
        [
          {
            text: 'In Alaska, just like New Mexico, one-third of households are unbanked or underbanked. Telling those families to rely on credit cards (with average APRs of 24%) or to “',
          },
          {
            text: 'just borrow money from a friend',
            href: 'https://www.dailysignal.com/2023/07/11/exclusive-pew-backs-crackdown-payday-loans-conservative-groups-reports/',
          },
          {
            text: '” ignores the lived reality that many are locked out of those systems. For them, a regulated payday loan is often cheaper, more transparent, and more accessible than the alternatives.',
          },
        ],
        [
          {
            text: 'Banning these loans doesn’t eliminate hardship. It deepens it. Families who once relied on a $400 loan to cover rent or utilities are now forced into bounced checks, pawnshops, or unlicensed loan sharks. We saw it in Illinois, we saw it in New Mexico, and Alaska will see it too if lawmakers ignore the evidence.',
          },
        ],
        [
          {
            text: 'If we truly want to protect consumers, the answer isn’t arbitrary price controls. It’s transparency, competition, and choice. Licensed small-dollar lenders should be allowed to operate under clear, enforceable rules that ensure borrowers understand terms and costs. That way,',
          },
          {
            text: 'Alaskans can choose',
            href: 'https://www.adn.com/opinions/2025/07/09/opinion-dunleavy-was-right-to-veto-the-interest-rate-cap-bill/',
          },
          {
            text: 'what works best for them, without being pushed into the shadows of an unregulated black market.',
          },
        ],
        [
          {
            text: 'Good intentions don’t pay the bills. But choice, transparency, and access can.',
          },
        ],
      ],
    },
  'alaska-rejects-price-controls-on-interest-rates': {
    slug: 'alaska-rejects-price-controls-on-interest-rates',
    source: {
      name: 'Americans for Tax Reform',
      href: 'https://atr.org/alaska-rejects-price-controls-on-interest-rates/',
    },
    paragraphs: [
      [
        {
          text: 'On June 24th, Alaska Governor Mike Dunleavy vetoed SB 39, a bill that would have capped interest rates for loans under $25,000 at 36%. This move deserves praise as a win for consumers and borrowers with exceptional and urgent needs for short-term credit.',
        },
      ],
      [
        { text: 'In a' },
        {
          text: 'memo',
          href: 'https://www.documentcloud.org/documents/25984599-sb-39-veto-message/',
        },
        {
          text: 'related to the veto, Governor Dunleavy rightly underscored key concerns about how the bill would impact access to short-term credit and emergency loans.',
        },
      ],
      [
        {
          text: 'Interest rate caps are a textbook example of bad economic policy. Price controls distort market forces under the guise of consumer protection against predatory lending. Despite proponents’ claims, the bill would hurt borrowers. Payday lending and alternative forms of consumer credit are often last resort lifelines for individuals needing emergency assistance to pay bills or cover emergency expenses.',
        },
      ],
      [
        {
          text: 'Interest rates are a proxy for lending risk. Individuals with higher credit scores enjoy lower rates on credit cards, mortgages, and auto loans for this reason. Lenders demand higher rates of return for taking on greater risk. Payday lenders charge higher interest to recoup the cost of a potential default or missed payments from borrowers with the highest risk profiles.',
        },
      ],
      [
        {
          text: 'By capping interest rates at a certain threshold, the most deprived borrowers would be cut off from accessing emergency credit. The policy signals that high-income individuals and corporations, which are already well-capitalized (and thus have the least need for credit), are the only entities that can be deemed creditworthy. According to the',
        },
        {
          text: 'FDIC',
          href: 'https://www.fdic.gov/news/press-releases/2024/fdic-survey-finds-96-percent-us-households-were-banked-2023',
        },
        {
          text: ', 18% of U.S. households are either unbanked or underbanked. Underbanked and low-income individuals are the most frequent users of payday lending services.',
        },
      ],
      [
        {
          text: 'Price controls in any form have repeatedly proven to be ineffective policy measures. According to',
        },
        {
          text: 'one paper',
          href: 'https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Fpapers.ssrn.com%2Fsol3%2Fpapers.cfm%3Fabstract_id%3D4315919&amp;data=05%7C02%7Cagins%40atr.org%7Cbaab59c569d6472e479908dc235ca40f%7C56343cb3e2f44f93b83bbb36af05cab6%7C0%7C0%7C638424127998088653%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=2n88dJNo5BU%2Be7cTP1S5YsICF3nyd5e%2F29f09pL%2BlYA%3D&amp;reserved=0',
        },
        {
          text: 'examining Illinois’s 36 percent APR cap, the measure “decreased the number of loans to subprime borrowers by 38 percent and increased the average loan size to subprime borrowers by 35 percent.” A survey discussed in the paper found that the “interest-rate cap worsened the financial well-being of many of [the small-dollar-credit] borrowers.”',
        },
      ],
      [
        {
          text: 'On the federal level, price controls on interest have failed to induce their intended outcomes. Prior to 1980, the Federal Reserve’s Regulation Q imposed interest rate caps on bank deposit accounts. Regulation Q was gradually',
        },
        {
          text: 'phased out',
          href: 'https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffiles.stlouisfed.org%2Ffiles%2Fhtdocs%2Fpublications%2Freview%2F86%2F02%2FRequiem_Feb1986.pdf&amp;data=05%7C02%7Cagins%40atr.org%7Cbaab59c569d6472e479908dc235ca40f%7C56343cb3e2f44f93b83bbb36af05cab6%7C0%7C0%7C638424127998062931%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=UIfB9qEnFuIEg8fLTOmQZ9%2F8WpYDRFvP0K7z1GSOW7c%3D&amp;reserved=0',
        },
        { text: 'between 1980 and 1986. According to a' },
        {
          text: 'document',
          href: 'https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffiles.stlouisfed.org%2Ffiles%2Fhtdocs%2Fpublications%2Freview%2F86%2F02%2FRequiem_Feb1986.pdf&amp;data=05%7C02%7Cagins%40atr.org%7Cbaab59c569d6472e479908dc235ca40f%7C56343cb3e2f44f93b83bbb36af05cab6%7C0%7C0%7C638424127998073161%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=TIay0NfLVvrKJ%2F51YWuLOQ5Q%2Fq8NNFPEvPIENIbMneA%3D&amp;reserved=0',
        },
        {
          text: 'published by the St. Louis Fed, “Congress concluded that interest rate ceilings created problems for depository institutions, discriminated against small savers, and did not increase the supply of residential mortgage credit.”',
        },
      ],
      [
        {
          text: 'More recently this year, Senators Josh Hawley and Bernie Sanders introduced a bill that would cap credit card APRs at an unreasonably low 10%. This ceiling would have calamitous effects on consumer credit. A',
        },
        {
          text: 'study',
          href: 'https://www.mobankers.com/common/Uploaded%20files/About%20MBA/Missouri%20Banker%20Update/2025/EPC_Study_HawleySandersBill_February2025.pdf',
        },
        {
          text: 'on the bill found that its enactment could lead to over 80% of credit card holders losing access to credit altogether. Borrowers with credit scores below 740 would effectively be placed in a losing situation.',
        },
      ],
      [
        {
          text: 'Legislation proposed to cap interest rates in a bid to frame predatory lending as a boogeyman has failed time and again. Distorting market price signals always creates tangible losses for consumers in the form of reduced services.',
        },
      ],
      [
        {
          text: 'Governor Dunleavy took the appropriate course of action in vetoing a poorly construed bill that would have created unwanted ramifications for financially insecure consumers. By rejecting SB 39, Alaska reaffirmed its commitment to protecting a free-market system that enables all people to access critical financial services, not just the well off.',
        },
      ],
    ],
  },
  'opinion-dunleavy-was-right-to-veto-the-interest-rate-cap-bill': {
    slug: 'opinion-dunleavy-was-right-to-veto-the-interest-rate-cap-bill',
    source: {
      name: 'Anchorage Daily News',
      href: 'https://www.adn.com/opinions/2025/07/09/opinion-dunleavy-was-right-to-veto-the-interest-rate-cap-bill/',
    },
    paragraphs: [
      [
        {
          text: 'Gov. Mike Dunleavy recently vetoed a bill passed by both chambers of the Alaska Legislature that would have capped interest rates at 36% on small consumer and business loans up to $25,000. He made the right call.',
        },
      ],
      [
        {
          text: 'Proponents of the bill claimed it would help vulnerable consumers by protecting them from exploitative lenders, but it would do just the opposite. This bill’s harmful policies especially hurt poor and marginalized families and would have pushed them into unregistered, exploitative financial black markets.',
        },
      ],
      [
        { text: 'However well-intentioned, this troubling bill,' },
        {
          text: 'SB 39 / HB 132',
          href: 'https://alaskabeacon.com/2025/06/28/alaska-gov-dunleavy-vetoes-bill-capping-high-interest-rates-and-fees-of-payday-lenders/',
        },
        {
          text: ', would severely restrict access to consumer and small business credit in the Last Frontier. The bill would have altered the Alaska Small Loan Act by slapping a 36% rate cap on all loans up to $25,000 (both consumer and commercial) and implementing a test that would restrict community banks from partnering with third parties to expand lending.',
        },
      ],
      [
        { text: '[News coverage:' },
        {
          text: 'Alaska Gov. Dunleavy vetoes bipartisan bills related to school maintenance and payday loans',
          href: 'https://www.adn.com/politics/alaska-legislature/2025/06/26/alaska-gov-dunleavy-vetoes-bipartisan-bills-related-to-school-maintenance-and-payday-loans/',
        },
        { text: ']' },
      ],
      [
        {
          text: 'Credit cards are powerful vehicles for financial inclusion in the United States, and this bill would have made financial services less inclusive. Credit cards are highly regulated financial products, and by removing access to them, families are forced to tap into other markets, including pawn shops and off-the-books loans (which can be very unstable and with far higher interest rates than credit cards or other more regulated products) and other methods to fulfill their needs.',
        },
      ],
      [
        { text: 'I’ve seen this in my own life, as my parents' },
        {
          text: 'struggled to keep our family with eight children afloat',
          href: 'https://carriesheffield.com/book/',
        },
        {
          text: 'and my dad often weighed whether to pawn his wedding ring or watch to feed us. We existed in the financial shadows, where Alaskans would slip further down if this bill is signed into law.',
        },
      ],
      [
        {
          text: 'A “banking desert” is a census tract without a physical bank branch within a certain distance from its population center or within the tract itself. As a geographically expansive state — the biggest in America — Alaska has many rural areas with banking deserts, and this bill would have exacerbated the desert problem.',
        },
      ],
      [
        {
          text: 'The Philadelphia Fed reported',
          href: 'https://www.atlantafed.org/blogs/take-on-payments/2024/05/13/who-are-the-12-million-people-living-in-banking-deserts',
        },
        {
          text: 'among census tracts with majority Alaska Native populations, an astonishingly high 46.4% of residents live in banking deserts — a figure more than 12 times the national average.',
        },
      ],
      [
        {
          text: 'Underserved populations rely on accessible credit for emergencies. If Dunleavy signed this bill, their access to vital credit options would be severely restricted and banking deserts would grow. About',
        },
        {
          text: '99% of businesses in Alaska are small businesses',
          href: 'https://advocacy.sba.gov/wp-content/uploads/2022/08/Small-Business-Economic-Profile-AK.pdf',
        },
        {
          text: ', and this bill hurts small businesses when they instead deserve support.',
        },
      ],
      [
        {
          text: 'Risk-based lending — financial firms pricing lending proportionate to the risk assumed from a customer — is harmed by rate caps. Risk-based lending empowers consumers to build credit and improve their financial health. A 36% cap does not reduce borrowing cost; it simply limits who qualifies for credit based on risk and pushes people into riskier situations, including pawn shop loans.',
        },
      ],
      [
        {
          text: 'What can be confusing when talking about rate caps is APR calculations disproportionately affect short-term loans, making their costs appear artificially high. For example,',
        },
        {
          text: 'according to the Bank Policy Institute',
          href: 'https://bpi.com/what-is-the-break-even-cost-of-small-dollar-loans/',
        },
        {
          text: ', a 3-month, $100 loan costs banks $35 to issue, resulting in a 140% annual percentage rate — making such loans unviable under a 36% cap.',
        },
      ],
      [
        {
          text: 'Fintech-bank collaborations — which the bill also targeted — bridge gaps in traditional credit markets, allowing underserved communities to use structured loan products. These partnerships operate under well-established regulatory frameworks supervised by state and federal regulators. According to',
        },
        {
          text: 'a Morning Consult survey,',
          href: 'https://pro.morningconsult.com/articles/fintech-inclusion-regulation-poll',
        },
        {
          text: 'fintech loans improve borrower credit scores, particularly among lower-income, black, and Hispanic consumers.',
        },
      ],
      [
        {
          text: 'Alaska’s debate doesn’t exist in a vacuum, and other results foretell what would likely happen if Dunleavy signed this bill. In March 2021, Illinois enacted a 36% interest rate cap. By 2024,',
        },
        {
          text: 'lender licenses decreased by 64%',
          href: 'https://onlinelendersalliance.org/three-years-into-illinois-rate-cap-lender-licenses-are-down-64-percent-%20highlighting-how-rate-cap-has-significantly-diminished-consumers-access-to-credit/',
        },
        { text: ', meaning fewer financial choices for fewer borrowers.' },
      ],
      [
        {
          text: 'Researchers with the Federal Reserve System’s Board of Governors hypothesized that Illinois’ move would cut credit availability for higher-risk borrowers. This proved correct as these borrowers —',
        },
        {
          text: 'more likely to be minorities, women, and low-income people',
          href: 'https://www.iwf.org/2022/06/07/policy-focus-protecting-lending-services-for-unbanked-low-income-americans/',
        },
        {
          text: '— struggled to improve their financial lives after the Illinois law.',
        },
      ],
      [
        {
          text: 'These economists’ paper, titled “Credit for me but not for thee,',
          href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4315919',
        },
        {
          text: '” compared results from Illinois with a control group in a neighboring state, Missouri, without a rate cap. They found “the interest-rate cap decreased the number of loans to subprime borrowers by 44 percent.”',
        },
      ],
      [
        {
          text: 'This means fewer poor families able to solve their credit needs. Negative outcomes ensued, including utility shutoffs, late payment fees, and forfeiting emergency expenses.',
        },
      ],
      [
        {
          text: 'Most borrowers reported to researchers “they have been unable to borrow money when they needed it following the imposition of the interest-rate cap. Further, only 11 percent of the respondents answered that their financial well-being increased following the interest-rate cap, and 79 percent answered that they wanted the option to return to their previous lender.”',
        },
      ],
      [
        {
          text: 'Alaskans deserve better than to have their financial lives imperiled by troubling new laws. Dunleavy’s veto protects Alaskans and offers stability for the future.',
        },
      ],
    ],
  },
  'why-isnt-financial-literacy-taught-in-schools-and-who-benefits-from-that': {
    slug: 'why-isnt-financial-literacy-taught-in-schools-and-who-benefits-from-that',
    source: {
      name: 'Medium',
      href: 'https://skjsamu.medium.com/why-isnt-financial-literacy-taught-in-schools-and-who-benefits-from-that-dc3cd2962eb6',
    },
    paragraphs: [
      [
        {
          text: 'It’s one of those questions that pops into your head late at night, or when you’re staring at a confusing bank statement, or perhaps when a young person you care about proudly announces they’ve taken out their first high-interest credit card for “emergencies” and to “build credit.” The question is simple, yet its implications are vast: Why on earth aren’t we teaching basic financial literacy in most of our schools, right from an early age?',
        },
      ],
      [
        {
          text: 'We spend years teaching children about the Pythagorean theorem, the exports of ancient civilizations, and the complex dance of cellular mitosis. All valuable knowledge, no doubt. But how many of us regularly use the Pythagorean theorem in our daily lives compared to how many of us grapple with budgeting, saving, understanding debt, or trying to make sense of investment options? For most, the scales tip overwhelmingly towards the latter. Yet, we send our young people out into a complex, often predatory financial world armed with little more than a vague understanding that money is important and it’s good to have some. It’s like teaching someone all the rules of the road, the mechanics of a car, but never actually letting them practice parking or merging onto a highway until they’re doing it for real, alone, at rush hour.',
        },
      ],
      [
        {
          text: 'The consequences are all around us. We see individuals drowning in debt, unable to escape the crushing weight of interest payments on loans they never fully understood. We see families living paycheck to paycheck, one unexpected bill away from disaster, with no emergency fund to cushion the blow. We see bright, capable people making disastrous investment decisions based on hype or bad advice because they lack the foundational knowledge to assess risk. We see a pervasive anxiety around money that impacts mental health, relationships, and overall well-being.',
        },
      ],
      [
        {
          text: 'So, why this glaring omission in our educational system? It’s not a new problem. People have been lamenting the lack of financial education for generations. The reasons often trotted out feel like a well-worn list of excuses, each with a kernel of truth perhaps, but none truly sufficient to justify the current state of affairs.',
        },
      ],
      [
        {
          text: 'One common argument is that the curriculum is already too crowded. Teachers are under immense pressure to cover core subjects like math, science, language arts, and history. Standardized testing often dictates what gets taught, and financial literacy rarely features on these high-stakes assessments. Adding another subject, the argument goes, would simply be impossible. But is it truly about adding a whole new, isolated subject? Or could financial literacy be woven into the fabric of existing subjects? Math classes could use real-world examples of compound interest, budgeting, and tax calculations. Social studies could explore economic systems, consumer rights, and the history of money. Even language arts could involve analyzing the persuasive language used in financial advertising. It’s not necessarily about more hours in the school day, but about smarter, more relevant teaching.',
        },
      ],
      [
        {
          text: 'Then there’s the argument about who is qualified to teach it. Many educators, through no fault of their own, may not feel confident in their own financial knowledge to effectively teach it to others. This is a valid concern, but it’s a solvable one. It points to a need for better teacher training and resources, not an abandonment of the subject altogether. If we decide something is important enough, we find ways to equip our educators. We’ve done it with technology in the classroom, with new approaches to literacy, and with evolving scientific understanding. Financial literacy should be no different.',
        },
      ],
      [
        {
          text: 'Some also suggest that financial education is the responsibility of parents. And indeed, parents have a crucial role to play. But what if parents are themselves struggling with financial literacy, perhaps because they too were never taught? What if they are working multiple jobs just to stay afloat and simply don’t have the time or energy for these lessons? What if their own financial habits are not ones we’d want to pass on? Relying solely on parents creates a system of haves and have-nots, where children from financially savvy families get a head start, while others are left behind, perpetuating cycles of financial vulnerability. Schools, in theory, are the great equalizers, providing a baseline of knowledge for all.',
        },
      ],
      [
        {
          text: 'A more insidious, though perhaps less explicitly stated, reason might be the perception that finance is “too complex” or “too boring” for children and teenagers. This is a profound underestimation of young people’s capacity to learn and a failure of imagination in how the subject can be taught. Money is intrinsically interesting to most people because it directly impacts their lives and aspirations. Learning how to manage it, grow it, and use it wisely can be empowering. Interactive games, real-life simulations (like classroom economies), case studies, and guest speakers from the community can make financial concepts engaging and relatable. If we can teach them about far-flung galaxies and microscopic organisms, surely, we can teach them about a concept they will interact with every single day of their adult lives.',
        },
      ],
      [
        {
          text: 'But perhaps the most uncomfortable part of this discussion is to ask: Cui bono? Who benefits from a population that is largely financially illiterate?',
        },
      ],
      [
        {
          text: 'This is where the picture becomes a little darker, a little more unsettling.',
        },
      ],
      [
        {
          text: 'Consider the vast industries that profit from financial complexity and consumer ignorance. Credit card companies, for example, thrive on customers who don’t fully understand APRs (Annual Percentage Rates), balance transfers, or the long-term cost of making only minimum payments. The fine print is notoriously dense, and the teaser rates can lure unsuspecting individuals into cycles of debt that are incredibly difficult to break. A financially literate population would be far more discerning, more likely to pay balances in full, and less susceptible to these traps.',
        },
      ],
      [
        {
          text: 'Think about payday lenders and other purveyors of high-cost, short-term loans. Their entire business model is often predicated on people in desperate situations who don’t understand the astronomical interest rates they’re agreeing to, or who see no other option due to a lack of financial planning or emergency savings. Financial education could equip people with the skills to build those savings, to budget effectively, and to explore less predatory alternatives when faced with financial shortfalls.',
        },
      ],
      [
        {
          text: 'What about some segments of the investment industry? While many financial advisors are ethical and provide valuable services, the field can also be rife with jargon, opaque fees, and products that are unnecessarily complex. A populace that understands basic investment principles — diversification, risk vs. reward, the impact of fees over time — is less likely to be taken in by get-rich-quick schemes or sold unsuitable, high-commission products. They are more likely to ask tough questions and demand transparency.',
        },
      ],
      [
        {
          text: 'Even mainstream banking, while essential, can benefit from a certain level of consumer passivity. Overdraft fees, for instance, generate significant revenue for banks. While sometimes unavoidable, many overdrafts occur simply because people aren’t diligently tracking their balances or understanding the fee structures. A better understanding of basic banking could mitigate this.',
        },
      ],
      [
        {
          text: 'Beyond specific industries, a more general “consumer culture” also benefits. A society geared towards instant gratification, fueled by easy credit and relentless marketing, doesn’t necessarily want a population of cautious, thoughtful spenders who meticulously weigh their needs versus wants and save diligently for future goals. It wants consumers who are quick to buy, often on impulse, and who are comfortable using debt to finance their lifestyles. Financial illiteracy makes people more susceptible to advertising messages that equate happiness with material possessions and that downplay the long-term consequences of debt.',
        },
      ],
      [
        {
          text: 'It’s not necessarily about a shadowy cabal of powerful figures actively conspiring to keep the masses ignorant. It’s more about systemic incentives. These industries and systems have evolved, and their profitability is, in part, linked to the current levels of financial understanding in the general population. A sudden, widespread increase in financial savvy would inevitably disrupt these established models. It would force them to be more transparent, more competitive on clearer terms, and perhaps less profitable in certain areas. There isn’t necessarily a memo going around saying, “Let’s keep them in the dark,” but the outcome of inaction, the outcome of maintaining the status quo, certainly serves these interests.',
        },
      ],
      [
        {
          text: 'The argument isn’t that these entities are inherently evil, but that their business objectives are not always aligned with the best financial interests of a poorly informed individual. And when one side of a transaction has vastly more information and understanding than the other, it creates an imbalance of power that is ripe for exploitation, whether intentional or simply systemic.',
        },
      ],
      [
        {
          text: 'The absence of widespread financial literacy also has broader societal consequences. It contributes to wealth inequality. Those who understand how to save, invest, and manage debt are better equipped to build assets and achieve financial security, while those who don’t are more likely to remain trapped in cycles of poverty or financial precarity. This isn’t just bad for individuals; it’s bad for the economy as a whole. A population weighed down by debt is less entrepreneurial, less innovative, and more reliant on social safety nets.',
        },
      ],
      [
        {
          text: 'Moreover, a lack of financial understanding can make individuals more vulnerable to economic shocks, like recessions or job losses. Without savings or a clear plan, these events can be devastating. It can also lead to poor public policy choices if the electorate doesn’t understand the economic implications of certain proposals.',
        },
      ],
      [
        {
          text: 'So, what do we do? This isn’t a problem without solutions. First and foremost, we need to make financial literacy a priority in our education system. This means developing age-appropriate curricula from elementary school through high school. It means training and supporting teachers to deliver this content effectively. It means integrating financial concepts into other subjects to show their real-world relevance.',
        },
      ],
      [
        {
          text: 'For younger children, it can start with basics: distinguishing between needs and wants, the concept of saving, and the value of money. As they get older, lessons can move to budgeting, understanding credit and debt, the basics of investing, consumer rights, insurance, and planning for major life goals like education or retirement. The teaching needs to be practical, engaging, and empowering.',
        },
      ],
      [
        {
          text: 'Beyond schools, there’s a role for community initiatives, non-profits, and even responsible financial institutions to play in providing accessible financial education for adults. Libraries can host workshops, employers can offer financial wellness programs, and online resources can be made more widely available and user-friendly.',
        },
      ],
      [
        {
          text: 'We also need to foster a cultural shift. We need to talk more openly about money, not as a taboo subject, but as a practical tool. We need to encourage critical thinking about consumerism and advertising. We need to empower individuals to ask questions, to demand clarity, and to take control of their financial futures.',
        },
      ],
      [
        {
          text: 'The pushback will come, consciously or unconsciously, from those who benefit from the current confusion. They might argue it’s too complex, too expensive to implement, or not the school’s role. But the cost of not doing this is far greater — measured in individual hardship, stunted economic potential, and a less resilient society.',
        },
      ],
      [
        {
          text: 'Teaching financial literacy isn’t just about teaching people how to get rich. It’s about equipping them with essential life skills. It’s about fostering critical thinking and decision-making capabilities. It’s about giving them the tools to navigate a complex world with confidence and to achieve a measure of stability and security. It’s about fairness. It’s about creating a society where everyone has a better chance to understand and manage their financial lives, regardless of their background.',
        },
      ],
      [
        {
          text: 'The question isn’t just why financial literacy isn’t taught, but rather, when will we decide that the well-being and empowerment of our citizens are more important than the inertia of the status quo and the quiet profits derived from widespread financial bewilderment? The time for that decision is long overdue. Our children, and indeed our collective future, depend on it.',
        },
      ],
    ],
  },
  'credit-card-interest-cap-the-plan-to-debank-the-most-financially-vulnerable':
    {
      slug: 'credit-card-interest-cap-the-plan-to-debank-the-most-financially-vulnerable',
      source: {
        name: 'American Action Forum',
        href: 'https://www.americanactionforum.org/insight/credit-card-interest-cap-the-plan-to-debank-the-most-financially-vulnerable/',
      },
      paragraphs: [
        [
          {
            text: 'Senators Bernie Sanders (I-VT) and Josh Hawley (R-MO) teamed up to',
          },
          {
            text: 'introduce',
            href: 'https://www.congress.gov/bill/119th-congress/senate-bill/381/text',
          },
          {
            text: 'a bill (S. 381) that would amend the Truth in Lending Act to cap credit card interest rates at 10 percent for five years. The proposal mirrors President Donald Trump’s campaign promise of a 10-percent interest rate cap.',
          },
        ],
        [
          {
            text: 'The average credit card interest rate was 21.47 percent in the fourth quarter (Q4) of 2024, according to data from the Federal Reserve, well above the 10-percent cap proposal. Moreover, the Fed data – dating back to 1994 – showed that credit card interest rates have never dipped below 10 percent. According to the',
          },
          {
            text: 'Consumer Financial Protection Bureau (CFPB),',
            href: 'https://www.consumerfinance.gov/data-research/research-reports/the-consumer-credit-card-market/',
          },
          {
            text: 'only super-prime borrowers, those with credit scores above 800, had credit card interest rates below the proposed 10-percent cap as of 2022.',
          },
        ],
        [
          {
            text: 'A government-dictated price for credit card borrowing, specifically one below any historical market-determined price, would significantly reduce the supply of credit and effectively “debank” millions of customers. The supply reduction would push consumers – often the most financially vulnerable – to other, and often far costlier, credit providers outside the traditional banking system. Moreover, banks would likely respond to a credit card cap by reducing rewards programs and other card benefits, including fraud protection, while replacing lost interest revenue with fees to be paid by all credit card users.',
          },
        ],
        [{ text: 'The Credit Card Market and Competition' }],
        [
          {
            text: 'Credit cards enable users to borrow money from banks, finance companies, credit unions, and nonfinancial institutions to buy things today and pay back the borrowed funds later. Data from the',
          },
          {
            text: 'Federal Reserve Bank of New York',
            href: 'https://www.newyorkfed.org/microeconomics/hhdc/background.html',
          },
          {
            text: 'showed that there were more than 617 million credit card accounts in the United States in Q4 2024. The credit is provided at a price to consumers – the interest rate, known as the annual percentage rate (APR) – for lent funds not repaid by a specified date. The APR varies according to the risk profile of the individual: A lower APR is offered to those most likely to repay borrowed funds while those who pose a great risk of non-payment are afforded credit at a higher APR. An APR also reflects the costs related to compliance, fraud protection, other administrative costs, and rewards programs.',
          },
        ],
        [
          {
            text: 'The maximum APR that a bank can charge is determined by state',
          },
          {
            text: 'usury laws',
            href: 'https://www.bankrate.com/credit-cards/zero-interest/does-law-cap-credit-card-interest-rates/',
          },
          {
            text: '. National banks, meanwhile, can charge the highest interest rate allowed in the bank’s home state – not the cardholder’s. This means that national banks will use branches in the least-restrictive states. This has led to many',
          },
          {
            text: 'banks issuing credit cards',
            href: 'https://www.lawinfo.com/resources/consumer-protection/south-dakota/#:~:text=Many%20states%20have%20a%20usury,much%20interest%20as%20they%20want.',
          },
          {
            text: 'from South Dakota, which does not have a usury law. A federal cap on interest rates would effectively end this strategy.',
          },
        ],
        [
          {
            text: 'In recent years, APRs on all credit card plans increased from an average of 13.7 percent between 1994 and 2021 to 19.6 percent between 2022 and 2024. The most recent data from the Federal Reserve showed that the current commercial bank interest rate on all credit card plans was 21.47 percent in Q4 2024. Furthermore, the margin between the prime rate – which is an interest rate determined by individual banks and used as a reference rate for different types of loans – and the average APR on credit card accounts assessed interest also widened in recent years, reaching 15.3 percentage points at the end of 2024, as shown in Figure 1. The jump in APR drew the ire of several policymakers, including Senators Hawley and Sanders, as well as President Trump.',
          },
        ],
        [
          { text: 'Source: Federal Reserve Board of Governors' },
          {
            text: 'G.19',
            href: 'https://www.federalreserve.gov/releases/g19/current/',
          },
          { text: ',' },
          { text: 'FRED', href: 'https://fred.stlouisfed.org/series/DPRIME' },
        ],
        [
          {
            text: 'Several data sets indicated that recent changes in APRs largely tracked the macroeconomic environment and the risks to banks. Shortly after the onset of the COVID-19 pandemic, Americans were flush with cash amid various government relief programs and used a share of the windfall to pay down credit card balances. The decrease in risk was reflected in lower interest rates in 2020 and 2021 compared to 2019, as shown in Figure 1. Yet by 2022, the credit card risk profile changed: Credit card balances rose, the share of delinquent accounts spiked, and the charge-off rate increased, indicating an increased risk of lending. Moreover, inflation had spiked – peaking at 9.1 percent in June 2022 – prompting the Federal Reserve to increase the federal funds rate by 525 basis points between March 2022 and July 2023. This monetary policy adjustment put upward pressure on the prime rate. Collectively, interest rate hikes and an increase in the general price level – including the cost of services and rewards programs offered through credit cards – pushed up APRs.',
          },
        ],
        [
          {
            text: 'Data from the New York Federal Reserve’s Quarterly Report on Household Debt and Credit showed that credit card balances dipped from $930 billion in Q4 2019 to $770 billion in Q1 2021. The drop in credit card balances was short-lived, however, ballooning to over $1.2 trillion in Q4 2024 ( Figure 2).',
          },
        ],
        [
          { text: 'Source:' },
          {
            text: 'Federal Reserve Bank of New York Household Debt and Credit',
            href: 'https://www.newyorkfed.org/microeconomics/hhdc/background.html',
          },
        ],
        [
          {
            text: 'Credit card accounts that were 90 or more days delinquent moved in a similar pattern, albeit with a lag. The share of accounts 90+ days delinquent dipped from 9.98 percent in Q1 2021 to 7.59 percent in Q3 2022 before rising to 11.4 percent in Q4 2024 ( Figure 3).',
          },
        ],
        [
          {
            text: 'Commercial bank charge-off rates, which is the percentage of borrowed funds unlikely to be paid back, fell to a post-pandemic low of 1.63 percent in 2021 before jumping to 4.69 percent in Q3 2024, the highest since Q3 2011. ( Figure 4).',
          },
        ],
        [
          {
            text: 'The market for payments is dynamic. Credit cards compete with other forms of payment and with other credit cards directly.',
          },
        ],
        [
          {
            text: 'Historically, credit cards competed with debit cards and cash to pay for goods and services. More recently, innovative products such as buy-now-pay-later (BNPL) services have provided consumers with more choices. According to a',
          },
          {
            text: 'report',
            href: 'https://www.federalreserve.gov/econres/notes/feds-notes/the-only-way-i-could-afford-it-who-uses-bnpl-and-why-20241220.html',
          },
          {
            text: 'from the Federal Reserve, 14 percent of adults used BNPL in 2023, up from 12 percent in 2022, and 10 percent from 2021.',
          },
        ],
        [
          {
            text: 'Credit cards also compete directly with other credit cards. To gain customers, credit card issuers compete on terms of service including annual fees, cash advance fees, foreign exchange fees, late payment fees, and APRs. These issuers also compete by offering rewards programs, including cash back and travel perks. Ipsos, a market research and public opinion company,',
          },
          {
            text: 'found',
            href: 'https://www.ipsos.com/en-us/majority-americans-value-their-credit-card-rewards',
          },
          {
            text: 'that 68 percent of survey respondents prefer using credit cards because of the rewards they earn, and that 37 percent would use credit cards less if the rewards were not offered. These reward programs are a valuable form of competition among credit cards and are, in part,',
          },
          {
            text: 'paid for by increased APRs',
            href: 'https://www.communityfirstfl.org/resources/blog/what-is-a-good-apr-for-a-credit-card#:~:text=Types%20of%20Credit%20Cards%20and%20Associated%20APRs&amp;text=Rewards%20credit%20cards%20offer%20enticing,opting%20for%20these%20credit%20cards.',
          },
          { text: '.' },
        ],
        [{ text: 'Impact of a 10-percent Cap' }],
        [
          {
            text: 'Based on data from the Federal Reserve dating back to 1994, credit card interest rates have never dipped below 10 percent. Capping credit card interest rates would restrict the supply of credit and effectively debank millions of customers, most of whom are already among the most financially constrained. Data from the CFPB found that only super-prime credit card borrowers had APRs below the proposed 10-percent cap. The credit crunch would likely push customers to riskier, and often more expensive, forms of credit outside the traditional banking system.',
          },
        ],
        [
          { text: 'In a' },
          {
            text: 'letter',
            href: 'https://www.aba.com/-/media/documents/letters-to-congress-and-regulators/jointcloppositions38120250205.pdf?rev=0c43668081c74ad3acefde612a512004',
          },
          {
            text: 'submitted to Senators Sanders and Hawley, a coalition representing credit unions, community banks, and large and small financial institutions warned that an interest rate cap would likely restrict the supply of credit and drive consumers to less regulated credit providers, including pawn shops, auto title lenders, loan sharks, and payday loan companies. They noted, for example, that “payday lenders in Missouri charge annual interest rates of more than 300 percent,” far above the 22.8-percent APR for credit card accounts assessed interest. The letter cited Federal Reserve Board',
          },
          {
            text: 'research',
            href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4315919',
          },
          {
            text: 'that measured the effects of an all-in interest rate cap, which includes the APR and any associated fees, of 36 percent imposed by the state of Illinois and found that the “cap decreased the number of loans to subprime borrowers by 38 percent.” Furthermore, the same study found that the cap led to an increase of loans to prime borrowers by 16 percent. This study illustrates that the most financially vulnerable would bear the most harm.',
          },
        ],
        [
          {
            text: 'Rewards programs would also likely be affected by an interest rate cap. These programs are, in part, paid for by increased APRs, and a cap could put these perks at risk. Previous efforts to restrict revenue sources from payment providers caused rewards programs to disappear. In 2011, Congress passed the Durbin Amendment to the Dodd-Frank Act which capped interchange fees on debit card transactions. In response, rewards programs for debit card usage collapsed.',
          },
          {
            text: 'Analysis',
            href: 'https://insight.kellogg.northwestern.edu/article/who-pays-generous-credit-card-rewards',
          },
          {
            text: 'from the Kellogg School of Management at Northwestern University found that the “loss of debit-card rewards led to a 30 percent decline in debit-card payment volumes and a corresponding increase in credit-card payment volumes.” In other words, according to the report, it was more difficult for debit cards to compete with credit cards on rewards. It is possible that a rate cap of 10 percent would lead to a similar outcome. Rewards programs would likely be limited, or even eliminated, if a key source of revenue funding them is restricted. Conversely, if an interest rate cap becomes law, it is likely that the lost revenue would be replaced with higher fees. This would burden all credit card users rather than just those assessed interest on unpaid balances.',
          },
        ],
        [
          {
            text: 'The probable credit crunch and subsequent debanking of millions could lead to a negative macroeconomic shock. The reduction in the supply of credit could hamper consumer spending, which is more than two-thirds of gross domestic product.',
          },
        ],
      ],
    },
  'new-data-shows-consumers-take-strategic-approach-to-credit-usage': {
    slug: 'new-data-shows-consumers-take-strategic-approach-to-credit-usage',
    paragraphs: [
      [
        { text: 'Origin' },
        {
          text: 'al Article from PYMNTS, Dec.',
          href: 'https://www.pymnts.com/consumer-finance/2024/new-data-shows-consumers-take-strategic-approach-to-credit-usage/',
        },
      ],
      [
        {
          text: 'Credit takes center stage in the spending habits and financial lifestyles of today’s consumers. Increasingly, consumers strategically use multiple credit products to maintain financial flexibility and maximize benefits.',
        },
      ],
      [
        {
          text: 'Credit cards remain the most widely used product, with 68% of consumers holding active accounts. Higher-income consumers lead in adoption of credit cards, in addition to mortgages and other key products. More than half of consumers express interest in obtaining new credit products, signaling ongoing demand. Lenders aware of these demands can position their products to appeal to credit seekers.',
        },
      ],
      [
        {
          text: 'Consumers often rely on credit to bridge financial gaps, as 61% of consumers use credit out of necessity at least occasionally, and 20% would forgo essential purchases without access to preferred credit options. Monthly spending on credit cards and store cards averages $2,721, underscoring the pivotal role credit plays in how consumers manage their finances.',
        },
      ],
      [
        { text: 'Download the eBook' },
        {
          text: 'here',
          href: 'https://www.pymnts.com/wp-content/uploads/2024/12/PYMNTS-10-Impact-Statements-Consumer-Credit-December-2024.pdf',
        },
        { text: '.' },
      ],
      [
        {
          text: 'The report contains actionable insights into the evolving credit economy and its impact on consumers, lenders and markets. Ten charts of insightful data detail how consumers’ credit usage is reshaping the broader economic landscape.',
        },
      ],
      [
        {
          text: '“ Consumer Credit — 10 Impact Statements eBook,” a PYMNTS Intelligence exclusive, is based on monthly editions of the Consumer Credit Economy Report published in 2024. This eBook is drawn from a series of surveys conducted between March 2024 and November 2024 that examined U.S. consumers’ credit usage and the factors driving their choices. These reports were based on survey samples that were census-balanced to match the U.S. adult population in a set of key demographics, along with an analysis of other economic data. The eBook provides valuable insights into how consumers view and use credit.',
        },
      ],
    ],
  },
  'operation-choke-point-2-0-sc-credit-union-chief-tied-to-feds-effort-to-de-bank-certain-industries':
    {
      slug: 'operation-choke-point-2-0-sc-credit-union-chief-tied-to-feds-effort-to-de-bank-certain-industries',
      paragraphs: [
        [
          {
            text: 'A decade-old Obama administration “operation” aimed at de-banking certain industries is back in the news, as the incoming Trump administration has announced plans to investigate a second iteration of the so-called “Operation Choke Point.”',
          },
        ],
        [
          {
            text: 'The head of a South Carolina credit union was linked, through his membership on a Federal Deposit Insurance Corporation (FDIC) committee, to the original “Choke Point” operation.',
          },
        ],
        [{ text: 'Operation Choke Point 1.0' }],
        [
          {
            text: 'Operation Choke Point was a 2013 initiative by the U.S. Department of Justice that pressured banks to sever ties with businesses deemed “high-risk” by certain Obama administration officials, such as payday lenders and gun dealers.',
          },
        ],
        [
          {
            text: 'Critics argued that this strategy unfairly targeted legal industries without due process, leading President Donald Trump to terminate the operation in 2017.',
          },
        ],
        [
          {
            text: 'Recently, allegations have surfaced about a similar campaign, dubbed “Operation Choke Point 2.0,” allegedly targeting the cryptocurrency sector.',
          },
        ],
        [
          { text: 'Documents obtained by' },
          {
            text: 'Coinbase',
            href: 'https://finance.yahoo.com/news/fdic-letters-credence-crypto-operation-151321456.html',
          },
          {
            text: 'suggest that the FDIC advised banks to “pause” crypto-related activities in 2022, raising concerns about potential de-banking of crypto firms.',
          },
        ],
        [
          {
            text: 'In response, David Sacks, appointed as the incoming Trump administration’s “Crypto Czar,” has',
          },
          {
            text: 'acknowledged',
            href: 'https://coingape.com/trump-crypto-czar-david-sacks-to-look-into-operation-choke-point-2-0/',
          },
          {
            text: 'these concerns, stating that “there are too many stories of people being hurt by Operation Choke Point 2.0” and emphasizing the need for an investigation.',
          },
        ],
        [
          {
            text: 'Additionally, the Trump advisory team, including Elon Musk and Vivek Ramaswamy, is',
          },
          {
            text: 'reportedly',
            href: 'https://coingape.com/fdic-elimination-trump-doge-target-watchdogs-behind-operation-choke-point-2-0/',
          },
          {
            text: 'considering significant changes to banking oversight, potentially targeting agencies like the FDIC, which have been implicated in these de-banking practices.',
          },
        ],
        [
          {
            text: 'In a recent episode of The Joe Rogan Experience, venture capitalist Marc Andreessen',
          },
          {
            text: 'discussed the resurgence of de-banking practices',
            href: 'https://www.news.com.au/finance/business/banking/billionaire-investor-says-30-tech-founders-have-been-debanked-in-last-four-years/news-story/4161f4fe27dded8f3baa197237bd5c5d',
          },
          { text: 'reminiscent of the original Operation Choke Point.' },
        ],
        [
          {
            text: '“We’ve had like 30 founders de-banked in the last four years,” said Andreessen. “It’s been a big recurring pattern.”',
          },
        ],
        [
          {
            text: '“There’s no rules, there’s no court, there’s no decision process, there’s no appeal,” Andreessen said. “Who do you go to to get your bank account back?”',
          },
        ],
        [
          {
            text: 'Calling it “Operation Choke Point 2.0,” Andreessen described it as a “privatized sanctions regime” that allows bureaucrats to target American citizens similarly to how the U.S. imposes sanctions on foreign adversaries.',
          },
        ],
        [
          {
            text: '“They don’t have to de-bank you, they just have to put pressure on,” he said.',
          },
        ],
        [
          {
            text: 'Andreessen argued that this enables the government to sidestep constitutional limitations on direct action against individuals.',
          },
        ],
        [{ text: 'SC Credit Union Head’s “Choke Point” Ties' }],
        [
          {
            text: 'Martin Eakes, founder of the Center for Responsible Lending (CRL) and Self-Help Credit Union, which operates',
          },
          {
            text: 'five',
            href: 'https://www.self-help.org/locations/south-carolina-locations',
          },
          { text: 'credit unions in South Carolina, was named as an' },
          {
            text: 'inaugural member',
            href: 'https://archive.fdic.gov/view/fdic/2821',
          },
          {
            text: 'of the FDIC’s “Advisory Committee on Economic Inclusion” when the committee was formed in 2006.',
          },
        ],
        [
          {
            text: 'Michael Calhoun, the president of the Center for Responsible Lending and a former employee of Self-Help Credit Union,',
          },
          {
            text: 'currently',
            href: 'https://www.fdic.gov/advisory-committees/michael-calhoun',
          },
          { text: 'serves on the advisory committee.' },
        ],
        [
          {
            text: 'This advisory committee “played a major role in combating the payday lending industry,” reported the',
          },
          {
            text: 'Washington Free Beacon',
            href: 'https://freebeacon.com/issues/how-a-credit-unions-left-wing-execs-got-uncle-sam-to-shut-down-the-competition/',
          },
          {
            text: '. “The FDIC’s efforts are part of a larger initiative involving the Department of Justice and the Consumer Financial Protection Bureau called Operation Choke Point.”',
          },
        ],
        [
          {
            text: '“The effort seeks to eliminate the ability of businesses that federal regulators deem distasteful, exploitative, or dangerous to obtain financing from major American banks,” said the report.',
          },
        ],
        [
          {
            text: 'The program’s critics, reported the Free Beacon, say “it is designed to shut down legitimate businesses that the Obama administration opposes on ideological grounds by pressuring banks to stop lending to the classes of businesses it singles out as allegedly destructive or illegitimate.”',
          },
        ],
        [
          {
            text: 'Such businesses include legal enterprises like payday lenders, gun stores, and tobacco companies.',
          },
        ],
        [
          {
            text: '“Operation Choke Point is one of the most dangerous programs I have experienced in my 45 years of service as a bank regulator, bank attorney and consultant, and bank board member,” wrote former FDIC Chairman William Isaac in',
          },
          {
            text: 'The Hill',
            href: 'https://thehill.com/blogs/congress-blog/economy-budget/212164-congrress-needs-to-choke-off-operation-choke-point/',
          },
          { text: '.' },
        ],
        [
          {
            text: '“When the FDIC floated the pilot program, Eakes said it could be used as a means to eliminate the competition,” reported the Free Beacon. “Eakes ‘suggested that the most valuable outcome of the pilot project might be to convince policymakers that there is an alternative to payday loans, thereby making it more palatable to prohibit payday loans,’ according to minutes of the meeting.”',
          },
        ],
        [
          {
            text: 'Self-Help Credit Union was very active in South Carolina’s 2024 legislative session, which spanned from January to May.',
          },
        ],
        [
          {
            text: 'During the 2024 legislative session, Self-Help Credit Union and its advocacy arm, the Center for Responsible Lending (CRL), sought to restrict how installment lenders market their services with Senate Bill 910. The bill did not pass during the 2024 legislative session.',
          },
        ],
        [
          {
            text: 'S-910 would have regulated and potentially restricted small-dollar loans in South Carolina by imposing restrictions on how lenders market their services to households and which households can be targeted.',
          },
        ],
        [
          {
            text: 'Industry representatives raised concerns about how the bill depicted their practices and emphasized its unintended effects, including the risk of potential redlining due to its stringent restrictions on the neighborhoods where lenders could advertise.',
          },
        ],
        [
          {
            text: 'Opponents of the bill argued that it could limit credit options and stifle competition in the lending sector for South Carolinians.',
          },
        ],
        [
          {
            text: '“I’ll just say we ought to be very careful with the ways in which the government interferes in the private sector,” State Sen. Wes Climer (R-York)',
          },
          {
            text: 'said',
            href: 'https://palmettostatenews.com/stories/654591401-sen-climer-during-s-910-committee-hearing-we-ought-to-be-very-careful-with-the-ways-in-which-the-government-interferes-in-the-private-sector',
          },
          {
            text: 'during a committee hearing on the bill. “And one of the things that historically has yielded the greatest results for consumers.”',
          },
        ],
        [
          {
            text: 'According to the IRS, that effort was funded in part by more than $2 million',
          },
          {
            text: 'provided',
            href: 'https://projects.propublica.org/nonprofits/organizations/263753801',
          },
          {
            text: 'to the CRL traced back to left-wing activist George Soros.',
          },
        ],
        [
          {
            text: 'The Sandler Foundation, founded by Herbert and Marion Sandler, also donated over $25 million to the CRL from 2016 to 2022, supporting efforts to restrict small-dollar loans in South Carolina. The Sandlers, known for their controversial role in the 2008 financial crisis as subprime mortgage pioneers, funded the creation of the CRL through their foundation.',
          },
        ],
        [
          {
            text: 'Kerri Smith, the South Carolina president of Self-Help Credit Union and a leading advocate for the bill through the “SC Fair Lending Alliance,” of which Self-Help and CRL are members, was targeted by critics who suggested her lobbying efforts were motivated by special interests and would harm consumers.',
          },
        ],
        [
          {
            text: 'Connections to Soros and the Sandlers came back to bite Smith who faced criticism for pushing the legislation with help from organizations linked to leftist causes. She lost in the primary to Chris Huff, who went on to win the State House seat.',
          },
        ],
        [
          { text: 'The SC Lending Alliance is already' },
          { text: 'featuring', href: 'https://scfairlending.org/' },
          {
            text: 'pre-written lobbying letters on its website, aimed at getting the SC legislature to regulate small-dollar loans during the 2025 legislative session.',
          },
        ],
      ],
    },
  'elizabeth-warren-pushes-post-office-banking': {
    slug: 'elizabeth-warren-pushes-post-office-banking',
    paragraphs: [
      [
        {
          text: 'Article published in pymnts.com',
          href: 'https://www.pymnts.com/news/2014/elizabeth-warren-pushes-post-office-banking/',
        },
      ],
      [
        {
          text: 'U.S. Sen. Elizabeth Warren (D-Mass.) has voiced support for a new public-banking program to be administered by the U.S. Postal Service (USPS).',
        },
      ],
      [
        {
          text: '“If the Postal Service offered basic banking services — nothing fancy, just basic bill paying, check cashing and small dollar loans — then it could provide affordable financial services for underserved families and, at the same time, shore up its own financial footing,” Warren said in a recent statement, according to',
        },
        {
          text: 'Firedoglake',
          href: 'http://news.firedoglake.com/2014/02/04/elizabeth-warren-wants-a-public-option-for-banking-by-using-the-post-office/',
        },
        { text: '.' },
      ],
      [
        {
          text: 'Warren cited a recent report from Postal Service’s Office of the Inspector General that stated the service could offer assistance to underbanked consumers in the United States.',
        },
      ],
    ],
  },
  'how-partisan-bureaucrats-weaponized-financial-regulation': {
    slug: 'how-partisan-bureaucrats-weaponized-financial-regulation',
    paragraphs: [
      [
        {
          text: 'Article published on 9/9/24 in the Competitive Enterprise Institute',
          href: 'https://cei.org/opeds_articles/how-partisan-bureaucrats-weaponized-financial-regulation/',
        },
      ],
      [
        {
          text: 'The main goal of financial regulation in the United States is supposed to be the protection of consumers, investors, and their businesses from deception and fraud. Government agencies such as the Securities and Exchange Commission and the Federal Deposit Insurance Corporation should protect our interests and property rights from bad actors and criminals. Yet, in far too many cases, the financial regulatory agencies that are supposed to be our useful servants have become arrogant masters.',
        },
      ],
      [
        {
          text: 'I recently moderated a panel discussion on Capitol Hill titled “',
        },
        {
          text: 'De-Weaponization of Financial Regulation',
          href: 'https://cei.org/event/cei-lunch-briefing-de-weaponization-of-financial-regulation/',
        },
        {
          text: ',” which examined this problem. Panelists explained the past, present, and possible future of finance regulators, usually at the federal level, who abuse their discretion and power to achieve ends outside of the due process of law enforcement. This abuse, whose track record long precedes the January 2023 creation of chairman Jim Jordan’s',
        },
        {
          text: 'Select Subcommittee on the Weaponization of the Federal Government',
          href: 'https://judiciary.house.gov/subcommittees/committee-judiciary-118th-congress/select-subcommittee-weaponization-federal',
        },
        {
          text: ', is thoroughly un-American and has no place in our constitutional order.',
        },
      ],
      [
        { text: 'One of the Obama administration’s biggest scandals was “' },
        {
          text: 'Operation Choke Point',
          href: 'https://www.nationalreview.com/corner/operation-choke-point-over-cfpb-continues-its-aims/',
        },
        {
          text: ',” a coordinated effort of multiple federal agencies to drive companies active in politically disfavored sectors out of business by pressuring banks to cancel their accounts and service contracts. Businesses as diverse as payday lenders, pawn shops, gun stores, and coin shops were targeted. The government implicitly threatened regulated banks if they didn’t manage their “reputational risk” in a way that aligned with the preferences of officials at Treasury and the FDIC.',
        },
      ],
      [
        {
          text: 'Eventually, this project was exposed by whistleblowers and investigated by Republicans in Congress, with Representatives Blaine Luetkemeyer (R., Mo.) and Sean Duffy (R., Wis.) leading the charge. My Competitive Enterprise Institute colleague Iain Murray wrote a',
        },
        {
          text: 'study',
          href: 'https://cei.org/studies/operation-choke-point/',
        },
        {
          text: 'on the issue back in 2014, emphasizing, among other things, that the FDIC’s supposed concern over bank risk had little to do with financial solvency and could easily be used against any politically attractive target in the future:',
        },
      ],
      [
        {
          text: 'The FDIC’s list of high-risk industries seems guided more by moral censure than by any real prospect of criminality. If “reputational risk” is a significant factor in designating an industry “high risk,” then it is not too difficult to imagine a future FDIC in more “conservative” times designating a whole different list of industries.',
        },
      ],
      [
        {
          text: 'A disturbingly similar playbook is currently being run against cryptocurrency developers and investors, an effort that observers have started calling “Choke Point 2.0.” A 2023',
        },
        {
          text: 'memo',
          href: 'https://www.cooperkirk.com/wp-content/uploads/2023/03/Operation-Choke-Point-2.0.pdf',
        },
        {
          text: 'from D.C. law firm Cooper & Kirk described what is going on:',
        },
      ],
      [
        {
          text: 'Bank regulators have published informal guidance documents that single out cryptocurrency and cryptocurrency customers as a risk to the banking system. Businesses in the cryptocurrency marketplace are losing their bank accounts, or their access to the ACH network, suddenly, and with no explanation from their bankers. The owners and employees of cryptocurrency firms are even having their personal accounts closed without explanation.',
        },
      ],
      [
        {
          text: 'Thomas Hogan, a former chief economist at the Senate Banking Committee, has noted that the SEC specifically, under the leadership of Biden-appointed chairman Gary Gensler, has worked to disfavor cryptocurrency investments rather than simply extend over the industry the same level of oversight as that exercised over any other asset class. Hogan',
        },
        {
          text: 'wrote',
          href: 'https://www.aier.org/article/the-secs-illegal-war-on-crypto/',
        },
        {
          text: 'for the American Institute for Economic Research in July 2023:',
        },
      ],
      [
        {
          text: 'SEC officials have relied on opaque and discretionary enforcement actions. They have charged companies for not complying with the law without clearly stating what the law is. This approach is likely to push legal crypto exchanges to offshore jurisdictions with less regulatory scrutiny. The SEC must stop this illegal war on crypto. They should provide a clear, legal path for crypto exchanges to operate in order to protect American investors and the U.S. economy.',
        },
      ],
      [
        {
          text: 'And the efforts continue today. In June of this year, the cryptocurrency exchange Coinbase',
        },
        {
          text: 'sued',
          href: 'https://www.americanbanker.com/news/coinbase-sues-fdic-over-efforts-to-debank-crypto-companies',
        },
        {
          text: 'the FDIC and the SEC over efforts to “debank” crypto companies. The complaints allege that regulators have been targeting the industry for nearly two years with various administrative actions and penalties while refusing to disclose information about their actions, even when documents have been formally requested pursuant to the Freedom of Information Act. According to Coinbase chief legal officer',
        },
        {
          text: 'Paul Grewal',
          href: 'https://x.com/iampaulgrewal/status/1806299309836746909',
        },
        {
          text: ', “financial regulators have used multiple tools at their disposal to try to cripple the digital-asset industry.”',
        },
      ],
      [
        { text: 'Kyle Torpey' },
        {
          text: 'reported',
          href: 'https://www.investopedia.com/coinbase-lawsuit-against-sec-and-fdic-crypto-8670421',
        },
        {
          text: 'on the case for Investopedia in June, writing that “Coinbase’s complaint against the FDIC also addresses ‘pause letters’ sent to financial institutions the FDIC supervises, which allegedly aimed to halt crypto-related activities, framing the letters as part of a broader scheme to isolate digital-asset firms from banking services.”',
        },
      ],
      [
        {
          text: 'Obviously, no one has to take at face value the word of an interested party such as Coinbase. Though the company isn’t FDIC-insured, regulated entities have been complaining about their regulators for as long as such agencies have been in existence. But the preponderance of the available evidence points to executive-branch officials’ abusing their enforcement discretion to target a politically vulnerable sector of the market in ways that are consistent with previous abuses of power.',
        },
      ],
      [
        {
          text: 'With Operation Choke Point as our past and anti-crypto Choke Point 2.0 as our present, we would be remiss to not consider the potentially more dangerous future that a central-bank digital currency (CBDC) would present. The Federal Reserve, while it is supposedly not yet developing such a tool,',
        },
        {
          text: 'insists',
          href: 'https://www.federalreserve.gov/central-bank-digital-currency.htm',
        },
        {
          text: 'that “a CBDC would be the safest digital asset available to the general public, with no associated credit or liquidity risk.” It doesn’t take great effort to imagine the abuses of financial privacy and security that would become possible if the federal government controls every dollar in your bank account via a central database.',
        },
      ],
      [
        {
          text: 'Nicholas Anthony of the Cato Institute’s Center for Monetary and Financial Alternatives, for example, wrote in his new book',
        },
        {
          text: 'Digital Currency or Digital Control?',
          href: 'https://www.cato.org/books/digital-currency-or-digital-control',
        },
        {
          text: 'that “whether it’s preemptive controls to take choices off the table, behavioral controls to nudge people’s spending, or punitive controls to punish citizens, a CBDC would provide countless opportunities for government to control citizens’ financial transactions.”',
        },
      ],
      [
        {
          text: 'Despite an already highly regulated banking system, with an array of “',
        },
        {
          text: 'know your customer',
          href: 'https://www.cato.org/blog/many-uses-laws-against-lying-banks',
        },
        {
          text: '” and other disclosure mandates, the U.S. financial system is still sufficiently decentralized that implementing an authoritarian regime on par with the Chinese Communist Party’s social-credit system would be very difficult. Unless, of course, policy-makers move to',
        },
        {
          text: 'eliminate cash transactions',
          href: 'https://www.cato.org/blog/will-cbdcs-mark-end-cash',
        },
        {
          text: 'and force Americans to use a government-issued digital currency instead.',
        },
      ],
      [
        {
          text: 'At our best, we live in a country of laws and not of men, as John Adams famously said. When a citizen has committed no crime or injury against his fellow man, he should have nothing to fear from an honest and just government. It shouldn’t matter if some bank regulator happens to like gun shops or payday lenders or precious-metals dealers or Dogecoin or junk food or oil drilling or explicit websites. The only thing that should matter is if those firms are minding their own business and following the law — which the vast majority of them are doing.',
        },
      ],
      [
        {
          text: 'Of course, the government has plenty of levers of influence that could be weaponized against the American public, but the actions of financial regulators are especially important for two reasons. One, we have already seen the abuses of these agencies and have every reason to think they could occur again. And two, interfering with an individual’s or business’s ability to make and move and invest money is a way of socially crippling them and stopping them from freely expressing their political and moral beliefs.',
        },
      ],
    ],
  },
  '70-of-us-consumers-feel-stressed-about-personal-finances': {
    slug: '70-of-us-consumers-feel-stressed-about-personal-finances',
    paragraphs: [
      [
        {
          text: 'Article published on pymts.com on 9/6/24',
          href: 'https://www.pymnts.com/news/faster-payments/2024/70percent-us-consumers-stressed-personal-finances/',
        },
      ],
      [
        {
          text: 'In today’s competitive job market, traditional benefits like retirement plans and paid time off are falling short as workers demand immediate access to their earnings. Rising financial pressures and living costs are driving this shift, pushing employers to adapt or risk losing top talent.',
        },
      ],
      [
        { text: 'A PYMNTS Intelligence report, “' },
        {
          text: 'No-Wait Wages: Leveraging Instant Payments to Boost Employee Satisfaction',
          href: 'https://www.pymnts.com/tracker_posts/no-wait-wages-leveraging-instant-payments-to-boost-employee-satisfaction/',
        },
        { text: ',” created in collaboration with' },
        {
          text: 'The Clearing House',
          href: 'https://www.theclearinghouse.org/',
        },
        { text: ', highlights how instant payroll solutions are' },
        {
          text: 'becoming essential',
          href: 'https://www.pymnts.com/digital-payments/2023/pymnts-intelligence-leveraging-instant-payroll-to-improve-employee-satisfaction/',
        },
        { text: 'in addressing the growing demand for financial flexibility.' },
      ],
      [
        {
          text: 'Workers today are grappling with increased financial pressure, driving a new urgency for on-demand pay. According to the report, 83% of workers desire more frequent pay schedules, a significant shift from the traditional biweekly or semimonthly pay periods.',
        },
      ],
      [
        {
          text: 'The push for instant payroll is driven by inflation and a 24% increase in average spending per person, which has strained many workers’ budgets. This financial burden often pushes workers toward high-interest payday loans, worsening their debt. Instant payroll addresses this by giving employees timely access to their earnings, helping them manage expenses and avoid costly loans.',
        },
      ],
      [
        {
          text: 'For younger workers, the need for real-time access to earnings is even more critical. About 70% of Americans report feeling stressed about their personal finances, with 75% of adults aged 18-34 expressing significant financial anxiety. Among',
        },
        {
          text: 'Generation Z,',
          href: 'https://www.pymnts.com/tag/generation-z/',
        },
        {
          text: '79% of hourly workers admit they frequently lack sufficient funds to cover their bills on time.',
        },
      ],
      [
        { text: 'According to the report, workers are willing to pay for' },
        {
          text: 'real-time payroll',
          href: 'https://www.pymnts.com/news/2023/real-time-payroll-helps-struggling-workers-avoid-payday-loans/',
        },
        {
          text: ', but employers seeking to create a healthy working environment should offer this benefit for free. As demand for real-time payroll increases, many companies are adopting these solutions, but some workers are already using costly third-party services with annual interest rates up to 330%.',
        },
      ],
      [
        { text: 'Companies like' },
        { text: 'DailyPay', href: 'https://www.dailypay.com/' },
        {
          text: ', which recently raised $175 million and partners with major employers such as',
        },
        {
          text: 'Hilton',
          href: 'https://www.hilton.com/en/brands/hilton-hotels/?WT.mc_id=zlada0ww1hi2psh3bng4advcrb5dkt6multibr7_153663240_1004635&amp;gclid=3563c81eb70a12b68b14aec602fc33f0&amp;gclsrc=3p.ds&amp;msclkid=3563c81eb70a12b68b14aec602fc33f0&amp;utm_source=bing&amp;utm_medium=cpc&amp;utm_campaign=Search%7CHI%7CUS%7CNational%7CExact%7CCPC%7CEN%7CAPI%7CEDGE&amp;utm_term=hilton&amp;utm_content=US%7CALL%7CALL%7CGEN%7COK',
        },
        { text: 'and' },
        { text: 'Target', href: 'https://www.target.com/' },
        { text: ', show that integrating' },
        {
          text: 'earned wage access',
          href: 'https://www.pymnts.com/tag/earned-wage-access/',
        },
        {
          text: '(EWA) platforms can improve hiring and retention. For employers, investing in in-house real-time payroll solutions offers a strategic advantage in boosting employee satisfaction and loyalty.',
        },
      ],
      [
        {
          text: 'Providing employees with instant access to their wages can significantly boost job satisfaction and retention. Consider that 78% of consumers express high satisfaction with instant payouts, although only 36% currently receive their disbursements this way.',
        },
        {
          text: 'Fee-free instant payments',
          href: 'https://www.pymnts.com/disbursements/2023/consumers-want-instant-payments-but-dont-think-they-should-pay/',
        },
        {
          text: 'have been shown to increase satisfaction by 11% and nearly double the likelihood of employee loyalty.',
        },
      ],
      [
        {
          text: 'For businesses facing staffing challenges, the impact of offering no-fee instant payroll can be profound. Forty-six percent of',
        },
        {
          text: 'small to medium-sized businesses',
          href: 'https://www.pymnts.com/smbs/',
        },
        {
          text: '(SMBs) struggle with staffing shortages, and 42% report difficulties with employee retention.',
        },
      ],
      [
        {
          text: 'In such an environment, implementing real-time payroll can provide a competitive edge. Not only does it address the growing demand for financial flexibility, but it also improves employee morale and reduces turnover. As businesses navigate a tight labor market, the ability to offer instant, fee-free payroll could become a crucial factor in attracting and retaining talent.',
        },
      ],
      [
        {
          text: 'As employee expectations evolve, the demand for instant payroll reflects broader changes in financial needs. Workers seek flexibility and immediate access to their earnings, compelling employers to adapt. Real-time payroll solutions help address these financial pressures, enhancing job satisfaction and retention.',
        },
      ],
    ],
  },
  'the-push-for-public-banking-in-new-york': {
    slug: 'the-push-for-public-banking-in-new-york',
    paragraphs: [
      [
        {
          text: 'Article published in The American Prospect on 9/4/24',
          href: 'https://prospect.org/economy/2024-09-04-push-for-public-banking-new-york/',
        },
      ],
      [
        {
          text: 'Rochester wants to establish the first public bank in the United States in over a century.',
        },
      ],
      [
        {
          text: 'Rochester, New York, has become a focal point in the movement for public banking, a push driven by the urgent need to address poverty and economic inequities in the region. The city, one of New York’s largest, with around 210,000 residents, is more than 40 percent white, nearly 40 percent African American, about 20 percent Latino, and roughly 4 percent Asian. The poverty rate in Rochester is',
        },
        {
          text: 'nearly 30 percent',
          href: 'https://datausa.io/profile/geo/rochester-ny/',
        },
        {
          text: ', which is more than double the national rate. A public bank can help alleviate these problems by recirculating the money Rochester’s citizens already pay in taxes to support lending for community development.',
        },
      ],
      [
        {
          text: '“There is historic poverty, redlining, and disinvestment across the state, but it is especially pronounced in Rochester,” Tousif Ahsan, public banking campaign organizer at the',
        },
        { text: 'New Economy Project', href: 'https://www.neweconomynyc.org/' },
        {
          text: ', a New York–based organization that advocates for equitable economic policy, told the Prospect. “This presents a great opportunity for Rochester to create a public bank as a solution to these problems.”',
        },
      ],
      [
        {
          text: '“It’s asking a lot for community banks to carry the load on themselves, and as community banks shrink, the people don’t have access to the kind of money that they need,” Walter McRee, president of the',
        },
        {
          text: 'Public Banking Institute',
          href: 'https://publicbankinginstitute.org/',
        },
        {
          text: ', a nationwide organization that researches and promotes the benefits of public banking, told the Prospect. “The public banking movement is committed to the rights of citizens to control their own money and the idea that banking should be treated as a public utility.”',
        },
      ],
      [
        { text: 'The' },
        {
          text: 'Rochester Public Banking Act',
          href: 'https://www.nysenate.gov/legislation/bills/2023/A10134',
        },
        {
          text: ', sponsored by Assemblymember Harry Bronson (D), who represents sections of the city, aims to create a public, city-owned bank to better meet the financial needs of city residents. Introduced earlier this year, the proposal focused on wholesale lending to community banks and credit unions and would be restricted from directly competing with commercial and retail banks. Loans and financial services would be directed toward businesses and projects that benefit the local community.',
        },
      ],
      [
        {
          text: '“Supporting the local economy from the ground up through a nonprofit, wholesale bank is effective and would be a great asset for the Rochester community to not only support our neighbors but invest in Rochester’s future,” Bronson told the Prospect. “The Rochester municipal bank would work to reinvigorate marginalized communities that have been left on economic sidelines for too long.”',
        },
      ],
      [
        {
          text: 'However, the bill did not advance to the full Assembly during the 2023-2024 legislative session and must be reintroduced when the legislature reconvenes in January.',
        },
      ],
      [
        {
          text: 'The bill has garnered support from Rochester Mayor Malik Evans, who spent',
        },
        {
          text: 'over 20 years',
          href: 'https://www.cityofrochester.gov/departments/mayors-office',
        },
        {
          text: 'working in both a private bank and a credit union supporting small businesses and community development projects in the city. Key',
        },
        {
          text: 'progressive groups',
          href: 'https://www.publicbanknyc.org/about',
        },
        {
          text: 'like the New York Public Interest Research Group and Democratic Socialists of America have also expressed support. Gov. Kathy Hochul (D) has not commented on the Rochester initiative.',
        },
      ],
      [
        {
          text: '“Public banking is a tool for broader racial and economic justice, rather than an end in itself,” Ahsan said. “The coalition remains optimistic and prepared to keep fighting for public banking in New York.”',
        },
      ],
      [
        { text: 'The' },
        {
          text: 'Bank of North Dakota (BND)',
          href: 'https://thebndstory.nd.gov/',
        },
        {
          text: ', founded in 1919, is a compelling model for New York. As the only state-operated bank in the United States, the BND has showcased the benefits of a public banking system, including financial stability, support for local businesses, and significant contributions to the state’s economy. Moreover, North Dakota has more credit unions and community banks',
        },
        {
          text: 'per capita',
          href: 'https://ilsr.org/articles/charts-bank-north-dakota/',
        },
        {
          text: 'than any other state, largely attributed to the supportive role played by the Bank of North Dakota. The BND partners with local banks and credit unions to enhance their lending capacity, making it possible for them to compete more effectively against the big banks—which is what the Bank of Rochester would do if created.',
        },
      ],
      [
        {
          text: 'The BND returns its profits to the state’s general fund, which helps increase funding for public services, like education, infrastructure, and disaster relief, thereby reducing the tax burden on residents and businesses. In 2023, the BND',
        },
        {
          text: 'reported',
          href: 'https://bnd.nd.gov/bank-of-north-dakota-releases-2023-annual-report/',
        },
        {
          text: 'record profits of $192.7 million, a strong return on investment.',
        },
      ],
      [
        {
          text: '“[The Bank of North Dakota] has been around for a long time … and they perform well. Profitability goes back to the state. So why wouldn’t we do this? Why should the profits go into private hands when it could be returned to the public?” Melissa Marquez, CEO of the Genesee Co-op Federal Credit Union in Rochester and one of the most prominent supporters of the proposed public bank,',
        },
        {
          text: 'told NPR',
          href: 'https://www.npr.org/transcripts/1195518059',
        },
        {
          text: 'in 2023. “Let’s make sure enough money is circulating in Rochester to benefit Rochester residents.”',
        },
      ],
      [
        {
          text: 'Despite the clear benefits, establishing a public bank has remained a significant challenge for local and state governments. Since the creation of the BND, no other public bank has been successfully established in the United States. Political resistance, regulatory hurdles, and the private banking lobby pose formidable obstacles.',
        },
      ],
      [
        {
          text: 'The New York Bankers Association, which represents the interests of the private banking sector, has already',
        },
        {
          text: 'voiced opposition',
          href: 'http://docs.nyba.com/NYBA_docs/NYBATestimony_NYCCouncilFinanceCommitteeMeeting_4.28.2021.pdf',
        },
        {
          text: 'to a public bank in New York, citing high startup costs, lengthy timelines for the bank to become a self-sustaining entity, and historical failures of other public banks in the U.S. However, several U.S. cities like Austin, Philadelphia, and Los Angeles are also',
        },
        {
          text: 'conducting studies',
          href: 'https://publicbankinginstitute.org/studies-reports/',
        },
        { text: 'to determine the feasibility of establishing public banks.' },
      ],
      [
        {
          text: 'As Rochester recalibrates its legislative efforts, the city could set a precedent for public banking initiatives across the country. By stepping up engagement with residents and community banks and credit unions, the city could pave the way for an alternative to private, for-profit banks and foster more economic development in underserved areas.',
        },
      ],
    ],
  },
  'dear-cfpb-your-cure-is-worse-than-the-disease': {
    slug: 'dear-cfpb-your-cure-is-worse-than-the-disease',
    paragraphs: [
      [
        {
          text: 'Article published in the American Institute for Economic Research on 8/22/24',
          href: 'https://www.aier.org/article/dear-cfpb-your-cure-is-worse-than-the-disease/',
        },
      ],
      [
        { text: 'On August 12, we' },
        {
          text: 'submitted',
          href: 'https://www.regulations.gov/comment/CFPB-2024-0023-0959',
        },
        {
          text: 'a public regulatory comment to the Consumer Financial Protection Bureau (CFPB) in opposition to a',
        },
        {
          text: 'proposed rule',
          href: 'https://www.consumerfinance.gov/about-us/newsroom/cfpb-proposes-to-ban-medical-bills-from-credit-reports/',
        },
        {
          text: 'that would ban medical bills from credit reports. While this rule aims to increase access to credit, it is likely to do the opposite. When potential lenders know that certain information is not being disclosed, they will be hesitant to lend to potential borrowers, cutting off access to credit. In short: while this rule will reduce the supply of credit, it will not decrease the demand for credit. Low-income Americans, the income group with the',
        },
        {
          text: 'most',
          href: 'https://www.census.gov/topics/income-poverty/wealth/data/tables.2021.List_2110684178.html#list-tab-List_2110684178',
        },
        {
          text: 'medical debt, will turn toward black-market lenders to make up for the lack of credit available.',
        },
      ],
      [
        {
          text: 'Analogous results can be seen with the CFPB’s regulations on payday lenders. In 2016, the CFPB',
        },
        {
          text: 'proposed',
          href: 'https://www.consumerfinance.gov/payday-rule/',
        },
        { text: 'a rule under the' },
        {
          text: 'Dodd-Frank Act',
          href: 'https://www.cftc.gov/LawRegulation/DoddFrankAct/index.htm',
        },
        {
          text: 'that would regulate payday lenders in the name of consumer protection (although these lenders were already',
        },
        {
          text: 'regulated',
          href: 'https://www.realclearpolicy.com/articles/2019/03/19/righting_a_flawed_payday_loans_rule_111126.html',
        },
        { text: 'by state law). Research from' },
        {
          text: 'economists',
          href: 'https://www.mercatus.org/research/books/how-do-small-dollar-nonbank-loans-work',
        },
        { text: 'as well as the' },
        {
          text: 'CFPB',
          href: 'https://www.realclearpolicy.com/articles/2019/03/19/righting_a_flawed_payday_loans_rule_111126.html',
        },
        {
          text: 'showed that existing state regulations on payday lenders limited low-income Americans’ access to credit, leading the CFPB to',
        },
        { text: 'delay', href: 'https://www.consumerfinance.gov/payday-rule/' },
        { text: 'the rule’s implementation in 2019 and' },
        {
          text: 'withdraw',
          href: 'https://www.aier.org/Users/pete.earle/Downloads/revoke',
        },
        {
          text: 'the rule in 2020. It did, however, issue a rule regulating “',
        },
        {
          text: 'junk fees',
          href: 'https://www.cato.org/blog/incoherence-white-houses-anti-junk-fees-agenda',
        },
        {
          text: '” that will likely result in low-income Americans losing access to credit. (Other reasons for opposing regulatory action against “junk fees” can be',
        },
        {
          text: 'found here',
          href: 'https://www.aier.org/article/in-defense-of-junk-fees/',
        },
        { text: '.)' },
      ],
      [
        {
          text: 'Similar outcomes followed CFPB rulemaking on mortgage servicing. This',
        },
        {
          text: 'rule',
          href: 'https://www.consumerfinance.gov/rules-policy/final-rules/mortgage-servicing-final-rules-mortgage-servicing-rules-under-truth-lending-act-regulation-z/',
        },
        {
          text: 'took effect in January 2014 with the aim of protecting homeowners by requiring stricter reporting standards form “initial rate adjustment notices for adjustable-rate mortgages, periodic statements for residential mortgage loans, prompt crediting of mortgage payments, and responses to requests for payoff amounts.” It had a significant impact on',
        },
        {
          text: 'community banks',
          href: 'https://www.fdic.gov/resources/community-banking/report/2012/2012-cbi-study-1.pdf',
        },
        {
          text: ', which focus on providing traditional banking services to local communities. These banks are the',
        },
        {
          text: 'primary',
          href: 'https://www.congress.gov/event/113th-congress/house-event/LC214/text',
        },
        {
          text: 'source of banking for most rural areas, small towns, and urban neighborhoods. While a',
        },
        { text: 'study', href: 'https://www.gao.gov/products/gao-18-312' },
        {
          text: 'from the Government Accountability Office (GAO) characterized the effect of the regulations as modest, the GAO admitted that data quality for assessing how banks offer loans to businesses needs improvement. The GAO did find that the population among community banks declined by 24 percent (due to mergers among community banks and decline in new bank formation rate) and, among the',
        },
        { text: 'consolidated', href: 'https://www.nber.org/papers/w32521' },
        {
          text: 'community banks that remained, lending increased – albeit at a slower rate due to regulatory compliance. Other',
        },
        {
          text: 'research',
          href: 'https://faculty.haas.berkeley.edu/hqn/nguyen_aej_201901.pdf',
        },
        {
          text: 'determined that merger-induced bank closures significantly decreased access to credit, especially in rural areas. In the end, compliance costs are always and everywhere a stealth barrier to competition, reducing options for consumers while garbed in moral rectitude and properness.',
        },
      ],
      [
        {
          text: 'When these regulations inevitably yield unintended consequences, the CFPB cannot say they were not warned.',
        },
      ],
    ],
  },
  'us-agency-says-apps-that-let-workers-access-paychecks-before-payday-are-providing-loans':
    {
      slug: 'us-agency-says-apps-that-let-workers-access-paychecks-before-payday-are-providing-loans',
      paragraphs: [
        [
          {
            text: 'Associated Press Article published on 7/18/24',
            href: 'https://apnews.com/article/earned-wage-access-loans-tips-personal-finance-146c02d5af5bdff5032ddc93a15eee3c',
          },
        ],
        [
          {
            text: 'NEW YORK (AP) — The Consumer Financial Protection Bureau said Thursday that apps that allow workers to',
          },
          {
            text: 'access their paychecks in advance',
            href: 'https://apnews.com/article/earned-wage-access-costs-payday-loans-9679d1bd09546d12074e0f27e23f0632',
          },
          {
            text: ', often for a fee, are providing loans and therefore subject to the Truth in Lending Act, a 1968 law that requires lenders disclose all loan costs and fees.',
          },
        ],
        [
          {
            text: 'If enacted, the proposed rule would provide clarity to a fast-growing industry known as Earned Wage Access, which has been compared to payday lending. The agency wants borrowers to be able to “easily compare products” and to prevent “race-to-the-bottom business practices,” CFPB Director Rohit Chopra said on a call with reporters.',
          },
        ],
        [
          {
            text: 'Earned Wage Access apps',
            href: "https://apnews.com/video/lets-talk-about-earned-wage-access-0000018fcfcbd307afdfefffc01f0000#:~:text=Let's%20talk%20about%20Earned%20Wage%20Access%20%7C%20AP%20News&amp;text=Earned%20Wage%20Access%20can%20be,%2C%20Clio%2C%20MoneyLion%20and%20others.",
          },
          {
            text: 'have been around for more than a decade, but they gained popularity in the years prior to the pandemic and since. The apps extend small short-term loans to workers in between paychecks so they can pay bills and meet everyday needs. On payday, the user repays the money out of their wages, along with any fees.',
          },
        ],
        [
          {
            text: 'According to its report, the Consumer Finance Protection Bureau found that, in 2022, at least 5% of American workers used an earned wage product at least once. They estimate that 7 million workers were advanced $22 billion through apps that worked with their employers, and 3 million workers were advanced $9.1 billion through direct-to-consumer apps.',
          },
        ],
        [
          {
            text: 'The agency’s research shows the average worker who uses Earned Wage Access takes out 27 of these loans a year, meaning one loan for almost every biweekly paycheck. This can look similar to a revolving credit card balance. But with fees that would equal an average Annual Percentage Rate (APR) of over 100%, the loans have interest rates higher than the most expensive subprime credit card. Most of this interest comes from fees to expedite access to paychecks, the CFPB found.',
          },
        ],
        [
          {
            text: 'The typical user of these apps earns also less than $50,000 a year, according to the Government Accountability Office, and has experienced the pinch of',
          },
          {
            text: 'two years of high inflation',
            href: 'https://apnews.com/article/inflation-prices-rates-economy-federal-reserve-biden-f02b969d1b44a7ccb0385be03f766de0',
          },
          {
            text: '. Many of the apps charge monthly subscription fees and most charge mandatory fees for instant transfers of funds.',
          },
        ],
        [
          {
            text: 'Christine Zinner, policy counsel at Americans for Financial Reform, said the paycheck advance products “are nothing more than workplace payday loans, with consumers (being) more easily preyed upon since the money is only a tap away on a cell phone.”',
          },
        ],
        [
          {
            text: '“People can easily become trapped in a cycle of debt by re-borrowing, requesting advances 12 to 120 times each year, just to pay basic household expenses and make ends meet,” she said.',
          },
        ],
        [
          {
            text: 'The CFPB also said it is paying close attention to the “tips” many of the apps request when providing advances on paychecks. On the call, Chopra called the practice odd, noting that many paycheck advance companies bring in “substantial revenues” from the so-called tips.',
          },
        ],
        [
          {
            text: 'In 2021, the California Department of Financial Protection and Innovation found “users often feel compelled to leave (tips) due to applied pressure tactics like… claiming tips are used to support other vulnerable consumers or for charitable purposes.”',
          },
        ],
        [
          {
            text: 'With the interpretive rule, the CFPB is clarifying that “if workers obtain money they are required to repay out of their paychecks, this is a loan under federal law, (and the companies) must disclose an interest rate.”',
          },
        ],
        [
          {
            text: 'This means that tips and fees for expedited transfers must be incorporated into the cost of the loan, under the disclosure scheme mandated by the Truth in Lending Act, and those costs may not be treated as “incidental, even if the amount is variable,” Chopra said.',
          },
        ],
        [
          {
            text: 'Some Earned Wage Access companies have argued these fees should not be treated as part of the standard APR calculation on the loans. When Connecticut passed a law capping the fees the apps could charge under its state usury limits, at least one Earned Wage Access company, EarnIn, stopped operating in the state. Asked why, EarnIn CEO Ram Palaniappan said it was no longer “economically viable.”',
          },
        ],
        [
          {
            text: 'Penny Lee, president of the Financial Technology Association, an industry group that counts many EWA companies as members, said her group is “deeply concerned” by the proposed action by the CFPB.',
          },
        ],
        [
          {
            text: '“Earned Wage Access should not be considered a loan as it is a no-cost, non-recourse product giving access to money workers have already earned, not future pay,” she said in a prepared statement, adding the proposed rule would “hurt millions of workers who rely on Earned Wage Access to tap into their already earned wages.”',
          },
        ],
        [
          {
            text: 'In its report, the CFPB found that, despite companies marketing these services as free for workers in non-employer subsidized transactions, “most workers paid at least one fee and nearly all workers opt to pay a fee for expedited access to their funds.” The CFPB said that with nearly 50% of earned wage product users turning to the service more than once a month, “costs may accumulate for workers who are frequently paid by the hour, have liquidity constraints, and receive public benefits.”',
          },
        ],
        [
          {
            text: 'The agency will take comments on the proposed interpretive rule until the end of August.',
          },
        ],
        [
          {
            text: '“Today’s report and rule are important steps for the CFPB to ensure the market is working,” Chopra said. “We want to see the market compete down costs for employees and employers.”',
          },
        ],
      ],
    },
  'many-californians-lack-access-to-financial-services-a-public-banking-option-could-help-them':
    {
      slug: 'many-californians-lack-access-to-financial-services-a-public-banking-option-could-help-them',
      paragraphs: [
        [
          {
            text: 'Article published on July 11, 2024 at LAIST.com',
            href: 'https://laist.com/news/california-public-banking',
          },
        ],
        [
          {
            text: 'Account minimums, overdraft fees, and showing ID are all common requirements for opening a bank account. But they’re hurdles many Californians can’t jump over.',
          },
        ],
        [
          {
            text: 'That’s why the state is considering establishing its own public banking option. CalAccount would be a no-cost banking platform without fees and penalties, managed by the state and run privately by another financial entity. It would also make it easier for unhoused people and those without state or federal ID to enroll.',
          },
        ],
        [
          { text: 'One' },
          {
            text: 'recent report',
            href: 'https://www.hraadvisors.com/wp-content/uploads/2024/06/HRA-Briefing-Book_Case_for_CalAccount-06.24.24.pdf',
          },
          {
            text: 'conducted by HR&A Advisors and commissioned by labor union SEIU found that 1 in 5 households in California lacks at least some access to financial services. Many of those people are Black, Latino, non-citizens and members of single parent, women-led households.',
          },
        ],
        [
          {
            text: 'California Assemblymember Miguel Santiago (D-Los Angeles) authored',
          },
          {
            text: 'the law',
            href: 'https://legiscan.com/CA/text/AB1177/id/2435712',
          },
          {
            text: 'requiring the state to look into public banking. He said one reason so many people can’t maintain a bank account is because it costs money to keep them open.',
          },
        ],
        [
          {
            text: '“[If you] get a fine for not having a minimum amount of dollars in the bank, or you get an overdraft fee … that really starts to add up more than most people think,” Santiago said. “If $20 could make the difference between you putting groceries on the table or not, it’s worth taking a look at CalAccount.”',
          },
        ],
        [
          {
            text: 'It’s not just fines and fees — many in California don’t use a bank because there’s no nearby branch to go to. One',
          },
          {
            text: 'count',
            href: 'https://www.hraadvisors.com/wp-content/uploads/2024/06/HRA-Briefing-Book_Case_for_CalAccount-06.24.24.pdf',
          },
          {
            text: 'finds that 70% of census tracts in the state have no physical banking locations.',
          },
        ],
        [
          { text: 'A recent state commission' },
          {
            text: 'report',
            href: 'https://legiscan.com/CA/text/AB1177/id/2435712',
          },
          {
            text: 'found that the most successful state public banking option would be online and available in physical locations that already house government services, like post offices.',
          },
        ],
        [
          {
            text: 'The study from HR&A Advisors said CalAccount could save California households without banking access an average of $1,300 a year. It could also keep some people from using costly cash checkers and payday lenders, which typically charge high interest.',
          },
        ],
        [
          {
            text: 'Deysi Gomez works at a McDonald’s in San Jose where she makes $20 an hour. She recently got a bank account with Bank of America, but said that she spent years without a bank because she only had an ID from her home country Guatemala. She also said that she was never given information about accessing a bank account.',
          },
        ],
        [
          {
            text: 'For these reasons, Gomez said she used to cash her checks at a fragrance store.',
          },
        ],
        [
          {
            text: '“I would walk up to four hours just to get to that location to change my check,” she said through a translator.',
          },
        ],
        [
          {
            text: 'Gomez added that she eventually started going to another location closer to home to cash her checks, but it charged her 6% for every $100.',
          },
        ],
        [
          {
            text: 'The proposal to create a public banking platform recently crossed a significant landmark when a California commission issued a',
          },
          {
            text: 'report',
            href: 'https://legiscan.com/CA/text/AB1177/id/2435712',
          },
          { text: 'on the program’s feasibility.' },
        ],
        [
          {
            text: 'That report said creating a public banking option hinges on the participation of at least one federally insured bank.',
          },
        ],
        [
          {
            text: '“However, offering no-fee accounts, at scale, may not be profitable (or even cover the basic costs of account maintenance) and may not, on its own, provide ample incentive to banks to participate in CalAccount,” the report states.',
          },
        ],
        [
          {
            text: 'The plan could also face pushback once it goes back to the legislature.',
          },
        ],
        [
          {
            text: 'In 2021, when Santiago’s proposal to look into public banking was being debated, a group representing businesses, banks, credit unions and the California Chamber of Commerce wrote a letter opposing it. They said a public banking option misdiagnosed the problem, and that people without adequate banking services needed more money, not a new bank.',
          },
        ],
        [
          {
            text: '“Individuals who utilize payday lenders and other high-cost loan products do so because they have inadequate cash flow, not because they lack access to banking services,”',
          },
          {
            text: 'the letter states',
            href: 'https://www.icba.org/docs/default-source/icba/advocacy-documents/letters-to-congress/joint-letter-opposition-to-assembly-bill-1177.pdf',
          },
          { text: '.' },
        ],
        [
          { text: 'In a' },
          {
            text: 'recent brief',
            href: 'https://laborcenter.berkeley.edu/calaccount-building-on-californias-financial-services-track-record/',
          },
          {
            text: ', Nari Rhee, who directs the Retirement Security Program at the UC Berkeley Labor Center, wrote that CalAccount could build on other state-managed financial services like CalSavers, a retirement savings program, to fill a gap for low income Californians.',
          },
        ],
        [
          {
            text: '“For families on the edge, when you’re just really living on a tight margin and then you get hit with a surprise fee, things can wind up cascading really, really quickly,” she said. “Putting a stop to that with access to these accounts I think can make a real difference.”',
          },
        ],
      ],
    },
  'walmart-puts-its-own-stamp-on-bnpl': {
    slug: 'walmart-puts-its-own-stamp-on-bnpl',
    paragraphs: [
      [
        {
          text: 'Story published by Tom Nawrocki on April 24, 2024 at Payments Journal',
          href: 'https://www.paymentsjournal.com/walmart-puts-its-own-stamp-on-bnpl/',
        },
      ],
      [
        {
          text: 'Walmart has introduced buy now, pay later loans through One, its majority-owned fintech startup. The move puts Walmart in competition with a similar offering from Affirm.',
        },
      ],
      [
        { text: 'Last year, Walmart announced its plan to' },
        {
          text: 'offer BNPL services',
          href: 'https://paymentsjournal.com/bnpl-arrives-at-walmart-self-checkout/',
        },
        {
          text: 'for self-checkout customers through Affirm at 4,500 of its U.S. stores. Since 2019, Affirm has been the exclusive provider of installment loans for Walmart customers.',
        },
      ],
      [
        {
          text: 'Currently, Walmart shoppers at select stores have the option to obtain BNPL loans from either provider for purchases starting at around $100, with annual interest rates ranging from 10% to 36%. These loans are applicable on various items such as electronics, jewelry, and power tools, but not groceries, alcohol, and weapons.',
        },
      ],
      [
        {
          text: 'The move makes sense from a cost-saving standpoint, analysts say.',
        },
      ],
      [
        {
          text: '“The pitch that BNPL vendors make to merchants is that it attracts new customers and encourages them to spend more,” said',
        },
        {
          text: 'Ben Danner',
          href: 'https://javelinstrategy.com/our-team/ben-danner',
        },
        {
          text: ', Senior Analyst of Credit and Commercial at Javelin Strategy & Research. “The partnership with Affirm likely boosted sales for Walmart. But Walmart was having to pay between 2% to 8% processing costs to Affirm. Launching their own platform allows them to save significantly on processing and capture that extra spend from consumers. Affirm helped capture extra spend in the interim.”',
        },
      ],
      [
        {
          text: 'It’s been a rapid rise for One, stemming from a fintech startup that Walmart launched in January 2021 in collaboration with Ribbit Capital.',
        },
        {
          text: '[RK1]',
          href: 'https://www.paymentsjournal.com/walmart-puts-its-own-stamp-on-bnpl/#_msocom_1',
        },
        { text: 'Ribbit, interestingly, was also an investor in Affirm.' },
      ],
      [
        {
          text: 'At the time, Walmart said that One would “provide users with an all-in-one financial services app to holistically manage their finances in one place.” One rolled out checking accounts for Walmart employees and a handful of online customers in September 2022. Its savings accounts began offering a 5% interest rate, well above the national average, as a strategy to attract more business. The addition of BNPL to One’s offerings will further drive customers into Walmart’s financial ecosystem, presenting opportunities for cross-selling other products.',
        },
      ],
      [
        {
          text: 'CNBC has reported',
          href: 'https://www.cnbc.com/2024/04/23/walmart-backed-fintech-one-introduces-buy-now-pay-later.html',
        },
        {
          text: 'that Affirm will continue to be available as a payment option at Walmart, but One is expected to receive much more promotion at the point-of-sale.',
        },
      ],
      [
        {
          text: 'For its part, Affirm is used to coexisting alongside other BNPL lenders, so it is unlikely that the company will leave its partnership with Walmart. It has also begun exploring life beyond retail, offering BNPL loans for elective medical procedures.',
        },
      ],
    ],
  },
  'splitit-powers-banks-installment-plans-at-checkout': {
    slug: 'splitit-powers-banks-installment-plans-at-checkout',
    paragraphs: [
      [
        {
          text: 'This article is from pymnts.com published on April 24, 2024',
          href: 'https://www.pymnts.com/news/payment-methods/2024/splitit-enables-banks-to-offer-installment-plans-at-checkout/',
        },
      ],
      [
        { text: 'Splitit', href: 'https://www.splitit.com/' },
        {
          text: 'has launched a solution that enables banks and card issuers to offer installment plans to their customers at a merchant’s checkout.',
        },
      ],
      [
        { text: 'The new' },
        {
          text: 'FI-PayLater',
          href: 'https://www.splitit.com/partnerships/banks-financial-institutions/',
        },
        {
          text: 'allows financial institutions (FIs) to connect directly into Splitit’s card-linked installment platform or connect via their existing card network, the company said in a Wednesday (April 24)',
        },
        {
          text: 'press release',
          href: 'https://news.splitit.com/2024-04-24-Splitit-Unveils-FI-PayLater-Empowering-Banks-to-Provide-In-Checkout-Installments-for-Existing-Customers',
        },
        { text: '.' },
      ],
      [
        {
          text: 'They can then gain incremental lending and fee income from buy now, pay later (BNPL) use cases, according to the release.',
        },
      ],
      [
        {
          text: '“By enabling FIs to present compelling installment offers to their customers at the merchant checkout, we enable FIs to become relevant within the ‘during purchase’ installment market,”',
        },
        {
          text: 'Nandan Sheth',
          href: 'https://www.linkedin.com/in/nandan-sheth-a13652/',
        },
        { text: ', CEO at Splitit, said in the release.' },
      ],
      [
        {
          text: '“Additionally, giving issuers the ability to pre-fund the merchants and charge the shopper driving new fee income in the environment of regulated interchange,” Sheth added.',
        },
      ],
      [
        {
          text: 'By offering their existing customers installment plans at checkout, financial institutions can enhance their brand presence, provide customers with more choices and strengthen customer loyalty, according to the release.',
        },
      ],
      [
        {
          text: 'In addition, merchants benefit by delivering payment options that are seamless and flexible, the release said.',
        },
      ],
      [
        {
          text: '“Our single entry point and extensive network of merchant endpoints make FI-PayLater the easiest and most effective pay-later option for issuers to adopt, integrate and operate across all consumer touchpoints, allowing us to lead the market and improve the economic model for all involved,”',
        },
        {
          text: 'Collin Flotta',
          href: 'https://www.linkedin.com/in/collinflotta/',
        },
        { text: ', head of product at Splitit, said in the release.' },
      ],
      [
        {
          text: 'PYMNTS Intelligence has found that 70% of consumers want to be able to access',
        },
        {
          text: 'BNPL plans',
          href: 'https://www.pymnts.com/buy-now-pay-later/2023/60-percent-millennials-are-interested-bank-based-bnpl-plans/',
        },
        { text: 'offered by banks rather than FinTechs.' },
      ],
      [
        {
          text: 'Consumers who plan to use BNPL products also want to trust their credit provider, which is where banks may hold some advantage, according to “',
        },
        {
          text: 'Banking on Buy Now, Pay Later: Installment Payments and FIs’ Untapped Opportunity',
          href: 'https://www.pymnts.com/study/consumer-credit-report-banks-buy-now-pay-later-payments',
        },
        { text: ',” a PYMNTS Intelligence and' },
        { text: 'Amount', href: 'https://www.amount.com/' },
        { text: 'collaboration.' },
      ],
      [
        {
          text: 'Younger consumers — millennials and those buying homes and starting families — are among those most interested in',
        },
        {
          text: 'installments',
          href: 'https://www.pymnts.com/news/payment-methods/2023/ubiquity-drives-consumer-demand-for-credit-card-installment-loans/',
        },
        {
          text: ', Sheth told PYMNTS’ Karen Webster in an interview posted in October.',
        },
      ],
      [
        {
          text: '“Their focus is changing from splitting a $200 hoodie to perhaps wanting installments for a new HVAC system in their home,” Sheth said.',
        },
      ],
    ],
  },
  'caps-on-lending-rates-distort-consumer-credit-availability': {
    slug: 'caps-on-lending-rates-distort-consumer-credit-availability',
    paragraphs: [
      [
        {
          text: 'Article 2/8/24 by Bryan Bashur and Andrew Gins – Americans for Tax Reform',
          href: 'https://www.atr.org/caps-on-lending-rates-distort-consumer-credit-availability/',
        },
      ],
      [
        {
          text: 'On December 14, 2023, Sen. Jack Reed (D-R.I.), along with seventeen other Democrats, introduced the deceptively named',
        },
        {
          text: 'Predatory Lending Elimination Act',
          href: 'https://www.congress.gov/bill/118th-congress/senate-bill/3549?q=%7B%22search%22%3A%22%22%7D&amp;s=1&amp;r=1',
        },
        {
          text: '(S. 3549). The bill wrongly expands the 36 percent annual percentage rate (APR) cap that currently applies to active-duty members of the armed forces and their dependents. Under the bill, the rate cap would apply to all consumer lending offered by banks, credit unions, and nonbank financial companies. Products that are not subjected to the bill’s APR cap include residential mortgages, certain auto loans, and loans made by federal credit unions that are already subject to an 18 percent cap and a 28 percent cap for payday loan alternatives. The bill also empowers the Consumer Financial Protection Bureau (CFPB) by giving the agency essentially unlimited authority to draft rules—in consultation with the Department of Defense—to implement the provisions in the bill.',
        },
      ],
      [
        {
          text: 'This legislation is significantly flawed because rate caps limit the availability of credit. According to',
        },
        {
          text: 'one paper',
          href: 'https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Fpapers.ssrn.com%2Fsol3%2Fpapers.cfm%3Fabstract_id%3D4315919&amp;data=05%7C02%7Cagins%40atr.org%7Cbaab59c569d6472e479908dc235ca40f%7C56343cb3e2f44f93b83bbb36af05cab6%7C0%7C0%7C638424127998088653%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=2n88dJNo5BU%2Be7cTP1S5YsICF3nyd5e%2F29f09pL%2BlYA%3D&amp;reserved=0',
        },
        {
          text: 'studying Illinois’s 36 percent APR cap, the rate restriction “decreased the number of loans to subprime borrowers by 38 percent and increased the average loan size to subprime borrowers by 35 percent.” A survey discussed in the paper found that the “interest-rate cap worsened the financial well-being of many of [the small-dollar-credit] borrowers.”',
        },
      ],
      [
        {
          text: 'Congress already recognized that rate caps are distortive. Prior to 1980, the Federal Reserve’s Regulation Q imposed interest rate caps on bank deposit accounts. Regulation Q was gradually',
        },
        {
          text: 'phased out',
          href: 'https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffiles.stlouisfed.org%2Ffiles%2Fhtdocs%2Fpublications%2Freview%2F86%2F02%2FRequiem_Feb1986.pdf&amp;data=05%7C02%7Cagins%40atr.org%7Cbaab59c569d6472e479908dc235ca40f%7C56343cb3e2f44f93b83bbb36af05cab6%7C0%7C0%7C638424127998062931%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=UIfB9qEnFuIEg8fLTOmQZ9%2F8WpYDRFvP0K7z1GSOW7c%3D&amp;reserved=0',
        },
        { text: 'between 1980 and 1986. According to a' },
        {
          text: 'document',
          href: 'https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffiles.stlouisfed.org%2Ffiles%2Fhtdocs%2Fpublications%2Freview%2F86%2F02%2FRequiem_Feb1986.pdf&amp;data=05%7C02%7Cagins%40atr.org%7Cbaab59c569d6472e479908dc235ca40f%7C56343cb3e2f44f93b83bbb36af05cab6%7C0%7C0%7C638424127998073161%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=TIay0NfLVvrKJ%2F51YWuLOQ5Q%2Fq8NNFPEvPIENIbMneA%3D&amp;reserved=0',
        },
        {
          text: 'published by the Federal Reserve Bank of St. Louis, “Congress concluded that interest rate ceilings created problems for depository institutions, discriminated against small savers, and did not increase the supply of residential mortgage credit.” Similarly, the rate cap in Sen. Reed’s bill would distort credit allocation and reduce the availability of credit to consumers.',
        },
      ],
      [
        {
          text: 'Some Republicans have not heeded the warnings of imposing government-mandated price controls. Sen. Josh Hawley (R-Mo.) introduced',
        },
        {
          text: 'legislation',
          href: 'https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.congress.gov%2Fbill%2F118th-congress%2Fsenate-bill%2F2760%2Ftext%3Fs%3D3%26r%3D11&amp;data=05%7C02%7Cagins%40atr.org%7Cbaab59c569d6472e479908dc235ca40f%7C56343cb3e2f44f93b83bbb36af05cab6%7C0%7C0%7C638424127998081133%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=7bp7kq8IAf4NhqHapfpVVzrfsghMGc%2BpwCrHVvuQFXg%3D&amp;reserved=0',
        },
        {
          text: 'that utilizes the same tactics as Sen. Reed’s bill. The bill applies an APR cap of 18 percent to credit cards issued in the U.S.',
        },
      ],
      [
        { text: 'Introducing a' },
        {
          text: 'price control',
          href: 'https://thehill.com/opinion/finance/4305633-price-controls-on-credit-card-interest-rates-will-compound-bidenomicss-damage/',
        },
        {
          text: 'on interest rates will produce unintended consequences and ultimately backfire. The misguided notion of imposing government-mandated rate caps rests on erroneous reasoning. In practice, price controls are infeasible, contravene free market principles, and harm consumers’ access to credit.',
        },
      ],
      [
        { text: 'According to one' },
        {
          text: 'Forbes',
          href: 'https://www.forbes.com/advisor/banking/costs-of-being-unbanked-or-underbanked/',
        },
        {
          text: 'article, 22% of Americans are unbanked or underbanked. Unbanked Americans have no bank account, and the other 16% of Americans who are underbanked have bank accounts but rely on payday loans and other short-term financing. Payday lenders offer access to',
        },
        {
          text: 'short-term credit',
          href: 'https://reason.org/policy-study/payday-lending-protecting-or-harmin/',
        },
        {
          text: 'for those who are otherwise shut out of obtaining that credit from conventional sources.',
        },
      ],
      [
        {
          text: 'Higher interest rates are charged to account for greater risk and expenses. One',
        },
        {
          text: 'article',
          href: 'https://ir.lawnet.fordham.edu/cgi/viewcontent.cgi?article=1227&amp;context=jcfl&amp;httpsredir=1&amp;referer=',
        },
        {
          text: 'in the Fordham Journal of Corporate & Financial Law from 2007 describes how payday lender profit margins are 7.6% compared to 13% for commercial lending institutions. The article also points out that loan losses as a percentage of outstanding loans stand at about 17-25% for payday lenders depending on the specific business model, while well-known commercial lenders experience loan losses of roughly 5%. This highlights the significant differences in how these businesses function.',
        },
      ],
      [
        {
          text: 'A cap on rates would further reduce margins for lenders and limit access to credit for consumers. This market distortion would ultimately reduce the availability of lending services, which would hurt lower-income borrowers who need immediate access to credit to pay for rent, groceries, or utilities.',
        },
      ],
      [
        {
          text: 'By limiting the availability of short-term credit options, government regulations could force borrowers into more precarious financial situations. It is vital that Congress avoids distorting a market that provides services to consumers in need of short-term credit.',
        },
      ],
    ],
  },
  'group-affiliated-with-dangerous-operation-choke-point-now-lobbying-to-regulate-fellow-lenders-in-the-states':
    {
      slug: 'group-affiliated-with-dangerous-operation-choke-point-now-lobbying-to-regulate-fellow-lenders-in-the-states',
      paragraphs: [
        [
          {
            text: 'Taken from American Greatness Article Feb 1, 2024',
            href: 'https://amgreatness.com/2024/02/01/group-affiliated-with-dangerous-operation-choke-point-now-lobbying-to-regulate-fellow-lenders-in-the-states/',
          },
        ],
        [
          {
            text: 'The Obama Administration’s “Operation Choke Point” was “one of the most dangerous programs” that former FDIC Chairman William Isaac said he had ever seen in his career as a bank regulator, wrote Isaac in The Hill in 2014.',
          },
        ],
        [
          {
            text: 'A “non-profit” credit union magnate affiliated with that “dangerous” operation is now lobbying to regulate fellow lenders in states across the country, reports',
          },
          {
            text: 'Palmetto State News',
            href: 'https://palmettostatenews.com/stories/653956872-national-groups-lobbying-for-south-carolina-lending-restrictions-have-received-millions-in-federal-taxpayer-assistance-while-lobbying-to-shut-down-the-competition',
          },
          { text: '.' },
        ],
        [
          {
            text: 'Operation Choke Point, involving the Department of Justice and the Consumer Financial Protection Bureau, “sought to eliminate the ability of businesses that federal regulators deem distasteful, exploitative, or dangerous to obtain financing from major American banks,” reported the Washington Free Beacon in 2015, according to the report.',
          },
        ],
        [
          {
            text: 'The Free Beacon reported that the operation’s critics said it was “designed to shut down legitimate businesses that the Obama administration opposes on ideological grounds by pressuring banks to stop lending to the classes of businesses it singles out as allegedly destructive or illegitimate.”',
          },
        ],
        [
          {
            text: 'Also affiliated with that program was an “Advisory Committee on Economic Inclusion” formed in 2006 by the Federal Deposit Insurance Commission. A member of the inaugural committee was Martin Eakes, the founder of Self-Help Credit Union and its affiliated Center for Responsible Lending.',
          },
        ],
        [
          {
            text: 'Among the legal businesses targeted by Operation Choke Point were gun stores, rare coin stores and … payday lenders.',
          },
        ],
        [
          {
            text: 'The Free Beacon reported that, when the FDIC “floated the program, Eakes said it could be used as a means to eliminate the competition.”',
          },
        ],
        [
          {
            text: '“Eakes ‘suggested that the most valuable outcome of the pilot project might be to convince policymakers that there is an alternative to payday loans, thereby making it more palatable to prohibit payday loans,’ according to minutes of the meeting,” reported the Free Beacon.',
          },
        ],
        [
          {
            text: 'Eakes is no longer on the FDIC’s advisory committee, but the president of the Eakes-created Center for Responsible Lending, Michael Calhoun, is currently on the committee, reported',
          },
          {
            text: 'Palmetto State News',
            href: 'https://palmettostatenews.com/stories/653956872-national-groups-lobbying-for-south-carolina-lending-restrictions-have-received-millions-in-federal-taxpayer-assistance-while-lobbying-to-shut-down-the-competition',
          },
          { text: '.' },
        ],
        [
          {
            text: 'Eakes’ groups have been active in the state in pushing for restrictions on fellow lenders.',
          },
        ],
        [
          {
            text: 'Two years ago, Eakes’ credit unions and the Center for Responsible Lending were involved in successfully lobbying for Illinois to enact a 36% rate cap. Last year, a study conducted by professors at Mississippi State University and Mississippi College and a member of the Federal Reserve Board of Governors found that access to loans decreased after enactment of the rate cap.',
          },
        ],
        [
          {
            text: 'Specifically, the number of loans to subprime borrowers decreased by 38%.',
          },
        ],
        [
          {
            text: 'These days, Eakes’ organizations are pushing for new restrictions on marketing by installment lenders in South Carolina, after failing to get a 36% rate cap passed in the previous session. “Front and center” in the lobbying effort is the head of Eakes’ credit union in South Carolina — Kerri Smith — who is concurrently running for in the Republican Primary for the State House against State Rep. Ashley Trantham (R-Greenville), a member of the state’s Freedom Caucus.',
          },
        ],
        [
          {
            text: 'The fate of the South Carolina bill is unknown, but its apparent that Eakes is bringing his “network of business and advocacy groups” to bear which, reported the Free Beacon, “has cumulatively received more than $380 million in federal grants, loans, and other taxpayer assistance since 1996” and “has spent millions lobbying the federal government on measures including additional regulations on those lenders.”',
          },
        ],
      ],
    },
  'study-most-americans-do-not-have-1000-cash-on-hand-for-emergencies': {
    slug: 'study-most-americans-do-not-have-1000-cash-on-hand-for-emergencies',
    source: {
      href: 'https://www.cbsnews.com/pittsburgh/news/study-americans-emergency-savings/',
    },
    paragraphs: [
      [
        {
          text: 'PITTSBURGH (KDKA) – Most Americans do not have the cash on hand to cover an emergency expense of $1,000, a new study reports.',
        },
      ],
      [{ text: 'Americans are just not saving as much as they need.' }],
      [
        {
          text: 'Suppose your car needs emergency repairs, or a family member is rushed to the emergency room for care not covered by insurance, or your furnace blows during this frigid winter weather. Could you easily put your hands on at least a thousand bucks?',
        },
      ],
      [
        {
          text: '“Only 44 percent of Americans could cover that out of savings,” Greg McBride, chief financial analyst at bankrate.com, told KDKA money editor Jon Delano on Tuesday.',
        },
      ],
      [
        {
          text: 'Bankrate.com conducted the study that found a majority of Americans still have not set aside a fund of cash for emergencies, although the numbers are getting better.',
        },
      ],
      [
        {
          text: '“The good news is that that’s actually higher than it’s been in the eight previous years that we’ve looked at this. The bad news, of course, is that it still means more than half of American households couldn’t cover that thousand dollars out of savings and would need to resort to something else,” says McBride.',
        },
      ],
      [
        {
          text: '“I do think there is a large part of the population that feels financially fragile, and when faced with the prospect of a financial emergency, would have to scramble,” notes Stanford University professor Martha Deevy, associate director of the Center on Longevity.',
        },
      ],
      [{ text: 'Deevy says that scramble leads to not optimal choices.' }],
      [
        {
          text: '“Many people have access to other forms of emergency funding, not optimal at all, whether it’s tapping into family or friends or other suboptimal ways like payday loans,” said Deevy.',
        },
      ],
      [
        {
          text: 'Bankrate’s study found that 35 percent would borrow the money, often using their credit cards.',
        },
      ],
      [
        {
          text: '“Credit cards would be the number one option that people would resort to if they didn’t have the savings, and that’s particularly troubling in a year when we’re talking interest rates going up. So the cost of that credit card debt — already typically the most expensive that households have — is only going to get costlier,” added McBride.',
        },
      ],
      [{ text: 'Everyone needs an emergency fund, the experts say.' }],
      [
        {
          text: '“Emergency savings is entirely different from retirement savings, and this is not either/or. These are both very very important,” says McBride.',
        },
      ],
      [
        {
          text: 'McBride says retirement savings can’t be accessed without penalty, so you need a separate account of cash. How much? Take what you spend each month and multiply by six.',
        },
      ],
      [
        {
          text: '“You want to have enough to cover six months’ worth of expenses, but I stress that that’s a destination. It’s not a starting point,” says McBride.',
        },
      ],
      [
        {
          text: 'The need to set aside money for both retirement and emergencies is uniquely American, says Deevy, because most American companies no longer give pensions to retirees.',
        },
      ],
      [
        {
          text: '“So we’ve just added one more financial stressor on to the U.S. population,” says Deevy.',
        },
      ],
      [
        {
          text: 'Most western nations provide pensions and government-funded benefits to their retirees but working Americans are now forced to fund their own retirement through 401ks and IRAs plus save for an emergency at the same time.',
        },
      ],
      [
        {
          text: '“One of the things that has really changed about the savings landscape for the U.S. population is when we shifted from a pension-based retirement system to a defined contribution retirement system, and we put the responsibility more on the individual.”',
        },
      ],
      [
        {
          text: 'Individual responsibility means setting aside some cash each month for an emergency.',
        },
      ],
      [
        {
          text: '“Pay yourself first,” says McBride. “Don’t wait till the end of the month and try to save what’s leftover because too often there’s nothing left over.”',
        },
      ],
      [
        {
          text: 'If there’s any good news out of this study, it’s that millennials are saving more these days than their elders, the Gen X’ers and Baby Boomers.',
        },
      ],
      [{ text: 'Still, too many are not saving much at all.' }],
    ],
  },
  'progressives-plan-to-destroy-payday-loans': {
    slug: 'progressives-plan-to-destroy-payday-loans',
    source: {
      href: 'https://www.iwf.org/2021/05/25/progressives-plan-to-destroy-payday-loans/',
    },
    paragraphs: [
      [
        {
          text: 'It would be leaving America’s most vulnerable people out in the cold. Democrats claim they serve the poor, but their latest plan will hurt low-income Americans’—especially racial minorities, immigrants and young people—ability to tap loans that pay for bills like water and electricity.',
        },
      ],
      [
        {
          text: 'However well-intentioned, Senate Democrats’ patronizing plan to establish a national interest rate cap is counterproductive for people in need and could very well push them to underground financial products in an unregulated, shadow economy.',
        },
      ],
      [
        {
          text: 'U.S. Senate Banking Committee Chairman Sherrod Brown (D-Ohio)',
        },
        {
          text: 'is reportedly planning to revive his proposal for a national interest rate cap of 36%',
          href: 'https://www.reuters.com/business/finance/us-senate-banking-chair-plans-interest-rate-cap-bill-he-turns-up-heat-lenders-2021-05-25/',
        },
        {
          text: ', believing he can overcome the 60-vote filibuster threshold. But the committee’s leading GOP member, Sen. Pat Toomey (R-Pa.) reportedly plans to block it—as he should.',
        },
      ],
      [
        {
          text: 'Reuters reports “an industry group representing payday lenders said such a cap would effectively eliminate small dollar loans by making them unprofitable,” and data from the Consumer Federation of America shows “While the median interest rate on small-dollar loans is between 25% and 38%, rates on some short-term loans of hundreds of dollars can be as high as 251%.”',
        },
      ],
      [
        {
          text: 'But Tom Lehman, associate professor of economics at Indiana Wesleyan University, points out the real-world intellectual sleight-of-hand when Democrats use these inflated annualized, triple or quadruple-digit interest rates.',
        },
        {
          text: 'At the Mises Institute, he gives the example of a typical payday loan fee',
          href: 'https://mises.org/library/defense-payday-lending',
        },
        {
          text: ', of $15 per $100 borrowed for a typical loan term of just 14 days, making the annualized compound interest rate “easily in the triple-digit range.”',
        },
      ],
      [
        {
          text: 'Lehman also writes about an academic analysis estimating that the median payday loan fee in North Carolina is $36, with a median, two-week loan of $244, which is an effective annual percentage rate of 419 percent.',
        },
      ],
      [
        {
          text: '“The critics of payday lending view these relatively high-interest rates with much alarm, arguing that the fees charged are exploitative of poor borrowers lacking in personal financial management skills,” Lehman writes. “Yet, the effective annual interest rate on the payday loan may not even enter the mind of the borrower. In all likelihood, the borrower cares not what the ‘effective APR’ is on the loan. The real price signal to which the borrower responds is the flat fee that is charged to hold the postdated check. If the value attached by the borrower to the immediate cash advance exceeds the value of the principal plus the fee one or two weeks hence, then the borrower will undertake the transaction, pure and simple.”',
        },
      ],
      [
        {
          text: 'If Democrats successfully kill off short-term lending in its current form, these borrowers will still need access to credit—this would force them to use even more pricey avenues, including overdraft protection, bouncing personal checks, or underground market alternatives. For lower-income Americans, these alternatives to payday lending could push them over a financial edge.',
        },
      ],
      [
        {
          text: 'Thomas Miller Jr., professor of finance at Mississippi State University, wrote that',
          href: 'https://www.detroitnews.com/story/opinion/2016/06/09/payday-loans-defense/85680368/',
        },
        {
          text: '“A 2013 Pew Charitable Trusts survey found that more than 60 percent of payday loan users would have to delay paying other bills without access to these loans. The alternative to short-term loan debt is being indebted to existing creditors—where failure to pay might mean losing access to utilities, like water and electricity.”',
        },
      ],
      [
        {
          text: 'If Senate Democrats are successful at enticing enough anti-free market Republicans to sign onto this bill, they could literally be leaving America’s most vulnerable people out in the cold.',
        },
      ],
    ],
  },
  'is-the-proposed-municipal-bank-of-los-angeles-a-good-idea': {
    slug: 'is-the-proposed-municipal-bank-of-los-angeles-a-good-idea',
    source: {
      href: 'https://www.dailynews.com/2021/05/17/is-the-proposed-municipal-bank-of-los-angeles-a-good-idea/',
    },
    paragraphs: [
      [
        {
          text: 'Last week, the Los Angeles City Council’s Economic Development and Jobs Committee approved a motion in support of the Municipal Bank of Los Angeles. It is a bad idea.',
        },
      ],
      [
        {
          text: 'Supporters confuse lending with spending. The bank is supported by a variety of special interest groups – but there is no transparency. No information about funding for Public Bank LA – the organization promoting the idea — is available.',
        },
      ],
      [
        {
          text: 'Labor endorsements for the Public Bank of Los Angeles are a red flag. According to Public Bank LA, union support includes: the Los Angeles County Federation of Labor, the United Food and Commercial Workers (UFCW) Local 770 (which represents grocery and retail workers), and UNITE HERE Local 11 (which represents workers in hotels, restaurants, and airports).',
        },
      ],
      [
        {
          text: 'One can only conclude that unions anticipate influence over the final funding guidelines – perhaps borrowers will be required to pay union wages. This will preclude funds going to small inner-city businesses that many supporters of the bank imagine it will help and it would have the effect of crowding low-skilled workers out of jobs.',
        },
      ],
      [
        {
          text: 'In February, Public Bank LA held a virtual Town Hall to rally supporters. The Town Hall revealed that supporters have no idea of what a public bank could or would do.',
        },
      ],
      [
        {
          text: 'President of SEIU 721 Bob Schoonover expects the bank to fund critical city services, including clean drinking water, and to improve healthcare and access to childcare in the city. Beverly Roberts, ACCE Action and Home Defenders League, was eager to see bank money used for “rental assistance, affordable housing, and housing services.” She noted that a public bank “will allow funds to be allocated to low and very low-income communities.”',
        },
      ],
      [
        {
          text: 'Both Roberts and Councilmember Monica Rodriguez expect bank lending to mitigate the pain and tragedy associated with bank foreclosure and the “endless cycle of payday lenders.” Susie Shannon, policy director at Housing is a Human Right, said that community investments on the part of the public bank will serve the unhoused.',
        },
      ],
      [
        {
          text: 'This is spending not lending. A bank can only survive if it makes loans that are repaid. It cannot serve as a pot of money to be used to help people in dire straits. If enthusiasm about projects related to community improvement results in an inappropriate assessment of risk, public bank lending will lead to defaults and insolvency.',
        },
      ],
      [
        {
          text: 'The last attempt at community banking in Los Angeles – the Los Angeles Community Development Bank – failed in 2004 because borrowers did not pay back loans. Credit officers at the not-for-profit bank lacked incentives to monitor loans on an ongoing basis. Not only was the bank encouraged to favor politically connected borrowers, but the bank was actively encouraged to fund ill-conceived, high-risk projects.',
        },
      ],
      [
        {
          text: 'The Valley Economic Development Center (VEDC), a community development financial institution (CDFI) located in Los Angeles, promoted its efforts with annual events to highlight its successes. Yet it was forced to file for bankruptcy in July 2019. According to Councilmember Rodriguez, VEDC “ran off with millions in resources that should have been reinvested in small businesses.”',
        },
      ],
      [
        {
          text: 'At the LA Public Bank Town Hall Rodriguez said the public bank would direct money to “investments in people, infrastructure, that will create local jobs.” Yet, studies of similar efforts as part of California’s Enterprise Zones found the program failed to create jobs.',
        },
      ],
      [
        {
          text: 'The expectations of the supporters of Public Bank LA are unrealistic and uninformed. What is most troubling is that members of the city council support the effort. Perhaps this is because they will be out of office when the loans come due.',
        },
      ],
      [
        {
          text: 'Shirley Svorny is a professor of economics emeritus at California State University, Northridge, and an adjunct scholar at the Cato Institute. Her article, co-authored by Robert Krol, “The Collapse of a Noble Idea,” explained the failure of the Los Angeles Community Development Bank. It was published in the journal Regulation in 2004-05.',
        },
      ],
    ],
  },
  'paternalistic-liberals-want-to-end-online-lending': {
    slug: 'paternalistic-liberals-want-to-end-online-lending',
    source: {
      href: 'https://www.nationalreview.com/2021/05/paternalistic-liberals-want-to-end-online-lending/',
    },
    paragraphs: [
      [
        {
          text: 'But what should millions of Americans without credit cards or bank accounts do?',
        },
      ],
      [
        {
          text: 'In 2017, the Federal Reserve estimated that one in four American families did not have enough savings to take care of an unexpected $400 expense. Since the pandemic lockdowns, that number has grown, as many Americans have been financially flattened.',
        },
      ],
      [
        {
          text: 'For some people with poor credit ratings, the answer has been to get an emergency loan. In the past, that has often meant going to a storefront for a “payday loan.” Such loans often developed a negative reputation because they charged high-interest rates for a loan only two to six weeks in length. So when the Consumer Financial Protection Bureau (CFPB) was created by President Obama in 2011, Congress gave it specific powers to regulate all short-term lenders.',
        },
      ],
      [
        {
          text: 'But the growth of the Internet has meant that many of these loans are shifting to innovative online products that offer a longer repayment term and better terms. They typically offer loans of between $1,500 and $10,000, with no requirement for collateral or a potentially intimidating meeting with a loan officer.',
        },
      ],
      [
        {
          text: 'But critics of “payday loans” blame all the alleged problems of such products on the online loan industry. Senator Elizabeth Warren, who was the creator of the CFPB, says consumers have difficulty in understanding the new products, make poor choices as a result, and must be protected.',
        },
      ],
      [
        {
          text: 'But the CFPB itself wasn’t sure whether more regulation was the answer. A',
        },
        {
          text: 'January 2021 CFPB task force',
          href: 'https://files.consumerfinance.gov/f/documents/cfpb_taskforce-federal-consumer-financial-law_report-volume-2_2021-01.pdf',
        },
        {
          text: 'noted that it was dangerous to use “condescending stereotypes” of consumers to drive regulation of the industry: Recent research indicates that today’s “experts” continue to underestimate the knowledge and capability of lower-income and marginal consumers. The Taskforce urges that any legislative or regulatory steps taken to deprive marginal consumers of access to small-dollar loan products be grounded in sound economic theory and empirical evidence and not in unfounded and condescending stereotypes of the consumers who use these products.',
        },
      ],
      [
        {
          text: 'In the last year of the Trump administration, the CFPB proposed a rule to allow financial institutions to once again offer creditworthy individuals easier access to loan products. Senator Warren quickly responded that “this new rule eliminates crucial protections for borrowers and makes it clear that the CFPB is not doing its job to protect consumers.” The CPFB may be on the verge of scrapping the Trump-era rule and effectively banning online lending.',
        },
      ],
      [
        {
          text: 'Many minority business owners find all this paternalistic and insulting. Business strategist',
        },
        {
          text: 'Julio Rivera writes',
          href: 'https://www.washingtontimes.com/news/2021/apr/24/elitists-work-to-limit-lending-choices-for-minorit/',
        },
        { text: ', at the Washington Times:' },
      ],
      [
        {
          text: 'It is particularly galling for Ms. Warren to make this argument about private lenders as previously she championed an initiative to allow the U.S. Postal Service to offer similar loans specifically to pay for rent, utilities, mortgage payments and other unforeseen expenses. Bureaucratic government loans yes, private companies no?... Leftists often attempt to disallow minorities and working-class households the ability to have the options and freedoms — in this case access to credit when emergencies occur — that elite progressives take for granted.',
        },
      ],
      [
        {
          text: 'Democrats have always favored big financial institutions and their lending programs and looked down on small-dollar consumer lending. But more than 7 million American homes have no one with a bank account, and nearly half say it’s because they don’t have enough to meet minimum balance requirements. Many have relied on nonbank credit for their loan needs. For those with only a high-school degree, fewer than 40 percent of the loans they take out come from banks.',
        },
      ],
      [
        {
          text: 'The Right Reverend Council Nedd, archbishop of the Episcopal Missionary Church, told me that liberal “loan saviors” who want to shut down short-term lending “have no plan for actually fixing your leak or getting your car repaired; not even a plan for creating an economic environment so that you can have access to the very credit cards that they take for granted.”',
        },
      ],
      [
        {
          text: 'Nedd says that instead of regulating online lenders — who have used technology to lower costs and more readily match lenders to the best loan options — the government should focus on expanding economic opportunity, not snuffing it out.',
        },
      ],
    ],
  },
  'public-bank-bill-puts-state-where-it-doesnt-belong': {
    slug: 'public-bank-bill-puts-state-where-it-doesnt-belong',
    source: {
      href: 'https://www.ocregister.com/2021/04/26/public-bank-bill-puts-state-where-it-doesnt-belong/',
    },
    paragraphs: [
      [
        {
          text: 'California lawmakers have a ready solution for almost any problem, no matter how large or small: Create a new government bureaucracy to administer some “landmark” program. Yet after the new agency is in place, the state rarely has any appetite for analyzing how the program is performing or fixing whatever unforeseen problems it has caused.',
        },
      ],
      [
        {
          text: 'Examples abound of failed California government bureaucracy. The most appalling recent scandal involves the state-run Employment Development Department, which dispenses unemployment payments. The agency has been months behind in paying legitimate claims even as it paid out as much as $31 billion in fraudulent or improper ones.',
        },
      ],
      [
        {
          text: 'California’s public pension systems are hundreds of billions of dollars in debt. Instead of reforming them, the Legislature created a state-run system (CalSavers) for private employees. As always, the existing systems are immune to reform because political considerations rather than financial ones guide the management of government agencies and programs.',
        },
      ],
      [
        {
          text: 'Now, California lawmakers want to start a public banking system to address a problem that could be addressed in simpler ways. Assembly Bill 1177 by Assemblyman Miguel Santiago, D-Los Angeles, would create the CalBank Program to protect consumers “who lack access to traditional banking services from predatory, discriminatory, and costly alternatives.” It would offer zero-fee, zero-penalty accounts and debit-card services.',
        },
      ],
      [
        {
          text: 'The bill’s language points to a legitimate problem. A quarter of California households lack bank accounts and rely instead on high-cost alternative services such as payday lenders and pawnshops. It certainly is true that “access to basic financial services, including demand deposit (checking) and savings accounts, is a critical component of financial stability.”',
        },
      ],
      [
        {
          text: 'Yet many financial services are available to the poor without creating a new bureaucracy. Traditional banks and especially credit unions offer low-cost banking options. For instance, there are prepaid debit cards for those who can’t maintain a regular balance. The problem of “under-banking” often can be solved by explaining to people that a checking account is more cost-effective than money orders and check-cashing services.',
        },
      ],
      [
        {
          text: 'There are plenty of ideas to explore here, but a public-banking option ought not be on the table. In traditional private banking, companies must make sensible loans or else they won’t be repaid and will lose money or fail. Of course, private banks have their share of problems — not the least of which is the tendency of government to bail them out when they make stupid decisions. Nevertheless, letting the government totally control a bank is a recipe for disaster.',
        },
      ],
      [
        {
          text: 'Public banking allows “democratically chosen priorities – such as social justice, poverty alleviation, carbon reduction, environmental cleanup, or industrial policy – to play a bigger role in who receives loans,” Jeff Spross wrote in a 2019 column in The Week. That’s the fundamental problem with the public-banking concept.',
        },
      ],
      [
        {
          text: 'Instead of making sound financial decisions, public banks can become a slush fund to divert taxpayer dollars to whatever causes politicians prefer. Not surprisingly, the Pacific Research Institute’s Kerry Jackson explained recently on these pages that public-banking systems have been plagued by financial failure and mismanagement.',
        },
      ],
      [
        {
          text: 'And don’t politicians already have enough of our money to divert to special causes? AB 1177 should be a nonstarter, although we welcome discussions about improving banking services for lower-income people. There are many market-based solutions that are better than creating another unaccountable state agency.',
        },
      ],
    ],
  },
  'a-few-small-banks-have-become-overdraft-giants': {
    slug: 'a-few-small-banks-have-become-overdraft-giants',
    source: {
      href: 'https://www.brookings.edu/opinions/a-few-small-banks-have-become-overdraft-giants/?source=email',
    },
    paragraphs: [
      [
        {
          text: 'The explosion of overdraft fees makes basic banking expensive for people living paycheck to paycheck. Banks and credit unions generate',
        },
        {
          text: 'over $34 billion in overdraft fees',
          href: 'https://www.forbes.com/sites/learnvest/2018/04/05/americans-paid-34-billion-in-overdraft-fees-last-year-heres-how-to-stop-the-charges/?sh=24b4ad453ce9',
        },
        {
          text: 'annually by one estimate. What those with money experience as ‘free checking’ is quite expensive for those without.',
        },
        {
          text: 'Prior research has focused',
          href: 'https://files.consumerfinance.gov/f/documents/201708_cfpb_data-point_frequent-overdrafters.pdf',
        },
        {
          text: 'on who pays overdraft, finding a small number of people (9%) are heavy overdrafters accounting for 80 percent of the fees. Not as carefully researched is whether this is just a small part of banks’ general business model, or whether for some banks overdraft has become their main source of profit. In fact a few small banks have become overdraft giants relying on overdraft fees as their main source of profit. These banks are really check cashers with a charter. Why do bank regulators tolerate this?',
        },
      ],
      [
        {
          text: 'For six banks, overdraft revenues accounted for more than half their net income. Three had overdraft revenues greater than total net income (meaning they lost money on every other aspect of their business). First National Bank of Texas (doing business as First Convenience Bank) made over $100 million in overdraft fees yet posted an annual profit of just $36 million in 2020. Academy Bank and Woodforest National banks likewise made more money on overdraft revenues than profits in 2020. All three were entirely reliant on overdraft fees for any profit in 2019 as well. This is not a one-year blip; it is their business model. Armed Forces Bank, Arvest Bank, and Gate City Bank all rely on overdraft fees for more than half their profit.',
        },
      ],
      [
        {
          text: 'Five of these six banks are national banks, regulated by the Office of the Comptroller of the Currency (OCC). Arvest Bank is a state-chartered institution whose primary federal regulator is the Federal Reserve (Saint Louis District), which seems to tolerate Arvest’s increasing reliance on overdraft as they went from 54 to 62 percent of total profit between 2019 and 2020. These regulators that allow banks to have a business model that depends on a single fee, charged only to consumers who run out of money, are not protecting the ‘safe, sound, and fair operation’ of the banking system.',
        },
      ],
      [
        {
          text: 'It is disturbing that regulators tolerate banks that are mostly or entirely dependent on overdraft fees for profitability. Most of these are banks are regulated by the Office of the Comptroller of the Currency (OCC), but others are primarily federally regulated by the Federal Reserve and the FDIC has backup authority over all insured institutions. From a consumer protection stance, these entities operate more like check cashers and payday lenders than banks. From a safety and soundness proposition, reliance on this one highly costly fee is not sustainable. Don’t take my word for it: Oliver Wyman',
        },
        {
          text: 'rang the alarm bell on overdrafts',
          href: 'https://www.oliverwyman.com/our-expertise/insights/2020/jul/beyond-overdraft.html',
        },
        {
          text: ': “What should banks do about overdraft? We believe the crisis is accelerating the need to replace an antiquated product and an unsustainable value exchange.”',
        },
      ],
      [
        {
          text: 'These are small banks, and most would be considered very small. Five had between $1 billion and $3 billion in assets (about one-hundredth the size of JPMorgan Chase). However, these banks may not even be the worst overdraft abusers. The smallest banks (those with assets totaling less than $1 billion) and most credit unions are not required to report their overdraft fee revenue at all. Researchers and consumer advocates have no idea how reliant they are on overdrafts. Unless bank regulators are asking these questions, the regulators may not know themselves. Regulators need to collect and publicize overdraft data for all banks and credit unions regardless of size.',
        },
      ],
    ],
  },
  'high-interest-loans-have-a-purpose': {
    slug: 'high-interest-loans-have-a-purpose',
    source: {
      href: 'https://www.lcsun-news.com/story/opinion/2021/02/28/high-interest-loans-have-purpose/6851416002/',
    },
    paragraphs: [
      [
        {
          text: 'Politicians often claim to be helping “the poor” with the policies they enact. But people with the resources to take extended time away from their work and spend months in committee hearings are inherently not “representative” of the people of New Mexico. They need to be reminded that most people live “paycheck to paycheck” and struggle to manage an expense from time to time — more so than New Mexico’s 112 legislators and governor.',
        },
      ],
      [
        {
          text: 'People of means generally have equity in their homes or can access government-subsidized loans for college. They would not find loans with interest rates in excess of 36 percent to be attractive, but the reality is that most Americans (and an even higher proportion of New Mexicans) lack $400 in accessible savings. Whether facing a car breakdown or another unexpected expense, working people deserve access to quality credit regardless of income or credit history.',
        },
      ],
      [
        {
          text: 'What alternatives do the 42% of consumers with non-prime credit scores have? If a borrower does not have collateral, their borrowing options are constrained as the risk of lending them money rises.',
        },
      ],
      [
        {
          text: 'Passing a 36-percent interest-rate cap in New Mexico amounts to the Legislature telling predominantly poor, working-class minorities they are incapable of making their own financial decisions. Who is to say whether it is better for a borrower to take out a regulated loan to meet a short-term need rather than suffering late payments that often result in fees equal to 100% of the bill amount, bounced checks, or other forms of lending that result in aggressive collections practices and can lead to the loss of homes or cars?',
        },
      ],
      [
        {
          text: 'New Mexico has the third-highest rate of car repossessions in the country. If a borrower falls behind on their payments a creditor may repossess their car at any time without their consent. A repossession can remain on a borrower’s credit score for at least seven years, damaging their credit and making it even more challenging for them to access financing options down the road.',
        },
      ],
      [
        {
          text: 'If small loans at lower interest rates were available without putting one’s car down as collateral, wouldn’t people in need of short-term cash be using those already?',
        },
      ],
      [
        {
          text: 'Few banks offer personal loans and credit union loans designed for nonprime consumers, called “payday alternative loans,” represent less than 1% of the 100 million Americans who make up the non-prime consumer market.',
        },
      ],
      [
        {
          text: 'Other lenders have claimed that they can fill the gap created by regulations like those being pushed in Senate Bill 66 this session — a claim which hasn’t proven true in other states. Most traditional lenders simply will not or cannot make these loans to borrowers with lower credit scores. In a letter to the US Department of the Treasury last September: “Small-dollar loans can be challenging for CDFIs (traditional lenders) to make work under their business model. The loans take the same or more resources to underwrite, manage, and provide technical assistance for as larger loans with a much narrower margin. Additionally, losses and defaults for these types of loans can be much higher than typical loans.”',
        },
      ],
      [
        {
          text: 'It’s easy to sit in your house with electricity and heat with a functioning car to take you to your place of work in the morning and pass judgment on people of lesser means who have been shut out by mainstream lenders. Given the events of the past year and the negative impact lockdowns have had, especially on low-wage workers, it would seem that the Legislature should have higher priorities than eliminating needed financial options for working people.',
        },
      ],
      [
        {
          text: 'The Legislature should refrain from further restricting the ability of New Mexicans from accessing credit of their choosing when emergencies arise and pushing them to worse outcomes.',
        },
      ],
      [
        {
          text: 'Paul Gessing is president of New Mexico’s Rio Grande Foundation. The Rio Grande Foundation is an independent, nonpartisan, tax-exempt research and educational organization dedicated to promoting prosperity for New Mexico based on principles of limited government, economic freedom and individual responsibility',
        },
      ],
    ],
  },
  'proposed-cap-on-lending-would-hurt-nebraskas-low-income-families': {
    slug: 'proposed-cap-on-lending-would-hurt-nebraskas-low-income-families',
    source: {
      href: 'https://omaha.com/opinion/columnists/thomas-aiello-proposed-cap-on-lending-would-hurt-nebraskas-low-income-families/article_ca3ec064-0a57-5ff7-aba8-0aa9285925bd.html',
    },
    paragraphs: [
      [
        {
          text: 'Too many policies with noble intentions end up hurting the very Americans they are supposed to be helping. For a prime example, look no further than the November ballot. Initiative 428 would place a government-imposed price control on the level of interest that lenders are allowed to charge borrowers on a short-term “payday” loan. This is an onerous rule that is more likely to decimate credit markets for Nebraskans in desperate need of a small, quick loan. Initiative 428 prohibits lenders from charging an interest rate in excess of 36%, imposes new restrictions on fees, and limits the ability for lenders to advertise to customers. Small-dollar lenders tend to help rather than hurt the people they serve. According to',
        },
        {
          text: 'Pew Charitable Trusts',
          href: 'https://www.pewtrusts.org/-/media/assets/2013/02/20/pew_choosing_borrowing_payday_feb2013-(1).pdf',
        },
        {
          text: ', “69% used it to cover a recurring expense, such as utilities, credit card bills, rent or mortgage payments, or food; and 16% dealt with an unexpected expense, such as a car repair or emergency medical expense.” Small-dollar credit products help them deal with everyday household expenses and that unforeseen emergency that can happen to anyone from any income level.',
        },
      ],
    ],
  },
  'the-real-cost-of-overdraft-fees': {
    slug: 'the-real-cost-of-overdraft-fees',
    source: {
      href: 'https://www.americanbanker.com/podcast/the-real-cost-of-overdraft-fees',
    },
    paragraphs: [
      [
        {
          text: 'This article discusses the real costs to consumers from bank overdraft fees. Overdraft fees exceed 1,000% APR. This is a lightly edited transcript from the Bankshot podcast.',
        },
      ],
      [
        {
          text: 'The fees have helped banks recoup costs of free or low-cost checking accounts for decades, but they can penalize low-income sutomers and drive them away from banking is there a better way?',
        },
      ],
      [{ text: 'Below is a lightly edited transcript of the episode:' }],
      [
        {
          text: 'ROMAN: So at the time, I wouldn’t say I was, you know, low low income. I can share what I was making, it was like, $45,000 at the time. I mean, I lived in New York, which put me above my means. And, sure, that was a decision that I kind of made. But at the same time, you know, that amount of money was enough to pay my food, my bills and everything else that I needed to do. There was just some sort of overlaps that occasionally, you know, I wasn’t saving anything, but I was able to survive.',
        },
      ],
      [
        {
          text: 'LAURA ALIX: This is my friend Roman, and he’s telling me about his experience with overdraft fees.',
        },
      ],
      [
        {
          text: 'ROMAN: And I bounced, I believe, two rent checks. And then I got an additional overdraft fee. And the bounce was because the time that it took for my paycheck to deposit, versus the time that it took for the check to clear was different. I was with, I believe, Bank of America at the time.',
        },
      ],
      [{ text: 'ALIX: Did you try to get that reversed?' }],
      [
        {
          text: 'ROMAN: I reached out to Bank of America, it was a very long process. They did not reverse it, claiming it was not their fault.',
        },
      ],
      [
        {
          text: 'ALIX: Okay. Okay, so it really wasn’t anything, it kind of was just a timing issue. It wasn’t you writing checks you can’t cash?',
        },
      ],
      [
        {
          text: 'ROMAN: Yes, it was a timing issue. However, I mean, I didn’t have any money in the bank account. When I wrote the check, I just was banking on the deposit coming in the next day, which it was supposed to, and clearing before the check was cleared. And that timing didn’t occur.',
        },
      ],
      [
        {
          text: 'ALIX: Roman’s story isn’t super unique — in fact, you can read thousands of stories just like his in the Consumer Financial Protection Bureau’s consumer complaint database, all of them complaining about the subject of this episode: bank overdraft fees.',
        },
      ],
      [
        {
          text: 'You almost certainly know what a bank overdraft fee is — maybe you’ve maybe even gotten a few yourself (this is a judgment-free zone). But the way overdrafts work is this: let’s say you swipe your debit card for $60 worth of groceries, but there’s only $50 in your account. When that happens, the bank covers the payment you made, making your account balance -$10.',
        },
      ],
      [
        {
          text: 'But the bank will also hit you with an extra fee fore that service – typically around $35.00 – making your new balance $45.00.',
        },
      ],
    ],
  },
  'payday-loans-arent-a-problem-student-loans-are': {
    slug: 'payday-loans-arent-a-problem-student-loans-are',
    source: {
      href: 'https://mnrepublic.com/5163/opinion/payday-loans-arent-a-problem-student-loans-are/',
    },
    paragraphs: [
      [
        {
          text: 'I think most can agree that when it comes to borrowing money—and lending it, for that matter—everybody should be treated fairly.',
        },
      ],
      [
        {
          text: 'Recently, various politicians across the country have been going after payday lenders by calling for capping loan interest rates at 36% or even as low as 15%. in some cases, politicians have moved to revoke and ban business licenses for payday lenders altogether. Their motivation is to prevent consumers from taking on insurmountable debt. Though well-intentioned, policies to cap interest rates would make payday lenders unprofitable and thereby eliminate what is often the only source of available credit for many Americans.',
        },
      ],
      [
        {
          text: 'ans are usually taken out by individuals who are short on cash and need money for an expense before their next paycheck—individuals who, without this credit, would otherwise be unable to afford an unexpected expense. Four in ten Americans lack the savings to cover an emergency expense of $400, according to the',
        },
        {
          text: 'Federal Reserve Bank',
          href: 'https://www.federalreserve.gov/publications/files/2016-report-economic-well-being-us-households-201705.pdf',
        },
        {
          text: '. Some examples: a necessary car repair, a medical emergency, or a security deposit on a new apartment.',
        },
      ],
      [
        {
          text: 'Some policymakers claim that payday lenders are predatory in nature, taking advantage of people in need. Chase Carlisle, a Memphis, Tennessee, city councilman who recently sponsored a resolution to ban payday lenders',
        },
        {
          text: 'claims',
          href: 'https://www.wmcactionnews5.com/2020/09/06/memphis-city-council-urges-state-ban-all-payday-lenders/',
        },
        {
          text: ', “People need help, and these lenders take advantage, so we need to do what we can to remove them from our community.”',
        },
      ],
      [
        {
          text: 'Carlisle is right about one thing: People do need help. Yet much of the time, the only financial help they can get is from a payday lender. In fact,',
        },
        {
          text: '42% of people',
          href: 'https://www.fico.com/blogs/average-u-s-fico-score-hits-new-high',
        },
        {
          text: 'have non-prime credit scores and thus often rely on alternative forms of credit. For these consumers, payday loans provide privacy, speed, convenience, and flexibility.',
        },
      ],
      [
        {
          text: 'The keys to good consumer financial policy are inclusion, access, innovation, and strong regulation—not restrictions—for the 42% of non-prime-credit-rated Americans.',
        },
      ],
      [
        {
          text: 'It should be noted that payday lending often serves as a vehicle for people with non-prime credit scores to establish or raise their credit scores—a benefit that provides longer-term dignity and goes beyond the short-term need to pay the bills.',
        },
      ],
      [
        {
          text: 'Policymakers’ stated goal of preventing consumers from experiencing financial hardships and debt, if genuine, is a noble one. The fact is, however, that this is debt that consumers take on with eyes wide open, as grown adults—payday borrowers understand very clearly what they are taking on for a short, foreseeable period. Thus, they should be capable of making their own informed decisions based on their specific needs, without government limiting their credit options.',
        },
      ],
      [
        {
          text: 'The irony of it all is that lawmakers are spending so much time and energy on short-term personal loans that they completely ignore the elephant in the room and the real problem they should be addressing: student loans.',
        },
      ],
      [
        {
          text: 'Unlike the payday loan market, in which borrowers know exactly how much they need and exactly how much they will need to pay back in a matter of weeks, the student loan market, which has few restrictions, serves consumers who often take on loans blindly and have no experience with debt.',
        },
      ],
      [
        {
          text: 'Student loans are taken out by arguably the most ignorant group of consumers in the country: College students. Being one myself, I can attest to this. Way too often, college students take on enormous debt without being properly informed about the decision. Honestly, student loans are consumer credit products that are most used to take advantage of people.',
        },
      ],
      [
        {
          text: 'Although interest rates for payday loans seem high at 36%, it actually doesn’t add up to whole lot, as the interest is accumulated over only a matter of weeks. Student loan debt, however, accumulates over many years—sometimes decades. The total interest over the life of a student loan for an undergraduate is typically well over 100% and can often be as high as 300%. Students rarely think about the overall lifetime cost of a loan because the repayment seems so far in the future.',
        },
      ],
      [
        {
          text: 'To compare the two issues further, student loan debt is now at $1.6 trillion,',
        },
        {
          text: 'according to CNBC',
          href: 'https://www.cnbc.com/2020/06/12/how-student-debt-became-a-1point6-trillion-crisis.html',
        },
        {
          text: ', and 44 million Americans are burdened by this debt. On the other hand,',
        },
        {
          text: '15 million Americans',
          href: 'https://finhealthnetwork.org/research/small-dollar-credit/#:~:text=An%20estimated%2015%20million%20people,to%20traditional%20credit%20is%20limited.',
        },
        {
          text: 'use small-dollar loans, with a total debt load that is absolutely dwarfed by student loan debt.',
        },
      ],
      [
        {
          text: 'This is not to say that policymakers need to focus on eliminating student loans or that student loans are a bad thing, because, again, inclusion and access are important keys to all good consumer financial policies.',
        },
      ],
      [
        {
          text: 'Thus, policymakers should ensure access to all types of loans, including payday loans, and shift some energy towards alleviating the student debt crisis.',
        },
      ],
    ],
  },
  'opinion-dont-restrict-payday-loans-people-need-to-survive-pandemic': {
    slug: 'opinion-dont-restrict-payday-loans-people-need-to-survive-pandemic',
    source: {
      href: 'https://www.detroitnews.com/story/opinion/2020/09/22/opinion-dont-slap-price-controls-payday-loans-people-need/5865567002/',
    },
    paragraphs: [
      [
        {
          text: '`The COVID-19 pandemic has created unprecedented hardship for millions of families in all corners of our country. More than',
        },
        {
          text: '16 million people',
          href: 'https://www.cnbc.com/2020/08/07/the-unemployment-rate-fell-in-july-heres-why-thats-important.html',
        },
        {
          text: 'were unemployed in July, countless businesses are either prohibited from operating or significantly limited in their operations due to state- and city-wide lockdown orders, and a third of people have reported a loss of income. Not only is the pandemic a public health emergency, but combined with its financial impacts it is a recipe for catastrophe.',
        },
      ],
      [
        {
          text: 'Despite these problems facing everyday people, negotiations between the House and the president surrounding another relief package remain at a standstill. So with prospects of Washington delivering another round of stimulus checks or enhanced unemployment slim many people, particularly those with lower-incomes, are understandably concerned about being able to make ends meet.',
        },
      ],
      [
        {
          text: 'In addition to rising concerns about paying their bills, worries about being able to access credit have also become a top-of-mind issue. And these Americans have a reason to be concerned. Consider this: Lenders have clamped down on consumer lending and banks are lowering credit limits and insisting on higher credit scores for loans they do make.',
        },
      ],
      [
        {
          text: 'For consumers who have thin credit files or non-prime credit scores, they could be locked out of credit markets. To fill this void, some borrowers will have to turn to the short-term, small-dollar loan industry, which offers credit though at a relatively high annual percentage rate (APR). While the loans may indeed carry a high APR, the vast majority of loans are paid back in a matter of weeks or months, not extended for an entire year.',
        },
      ],
      [
        {
          text: 'In other words, using the APR as a metric is entirely meritless. This “payday” loan business can be a far more attractive way to deal with an emergency expense than bouncing a check or finding an unregulated black market lender. Importantly, these payday lenders present a cash advance to a segment of the market that would otherwise go unserved.',
        },
      ],
      [
        { text: 'In fact, according to a 2012' },
        {
          text: 'Pew Trusts study',
          href: 'https://www.pewtrusts.org/en/research-and-analysis/reports/2012/07/19/who-borrows-where-they-borrow-and-why',
        },
        {
          text: ', 69% of people used payday loans to “cover a recurring expense, such as utilities, credit card bills, rent or mortgage payments, or food” and 16% of people “dealt with an unexpected expense, such as a car repair or emergency medical expense.” Small-dollar credit products help them deal with everyday household expenses and that unforeseen emergency that can happen to anyone from any income level.',
        },
      ],
      [
        {
          text: 'However, Washington Democrats are seriously considering ways to make it even harder for people to access these crucial short-term, small-dollar loans. Earlier this year, a House committee held a hearing on the need to impose price controls on how much interest lenders are able to charge borrowers.',
        },
      ],
      [
        {
          text: 'And recently a senior member of the Democratic Party introduced legislation to devastate the short-term lending industry by preventing the collection of legal debts in excess of',
        },
        {
          text: '36% APR',
          href: 'https://www.cnbc.com/2019/11/12/federal-lawmakers-look-to-take-payday-loan-rates-from-400-percent-to-36-percent.html',
        },
        { text: '. In May, House Financial Services Committee Chair' },
        {
          text: 'Maxine Waters',
          href: 'https://financialservices.house.gov/news/documentsingle.aspx?DocumentID=406520',
        },
        {
          text: 'sought to push the Federal Reserve and Treasury to exclude small-dollar lenders from participating in the Paycheck Protection Program.',
        },
      ],
      [
        {
          text: 'Many advocates of an interest rate cap mislead the public by pointing to loans with high attached APR — which is simply the rate of interest a borrower will pay over the course of a year due to compounding. However, using APR to evaluate short-term loans is a bad metric, since most short-term loans act as a cash advance that is paid back in full at the borrower’s next pay period.',
        },
      ],
      [
        {
          text: 'As any individual who has taken Economics 101 knows, government-imposed price controls do not work. Virtually every example in history shows price controls worsen the very problems they are supposed to solve.',
        },
      ],
      [
        {
          text: 'Whether placed on gasoline, banking interchange fees, or prescription drugs, setting price controls at below-market rates leads to shortages, squeezes the cost bubble toward some other portion of the economy, and imposes a deadweight cost on society.',
        },
      ],
      [
        {
          text: 'Capping rates also interferes with a lender’s ability to judge borrowers who may be creditworthy, or credit unworthy. To that end, interest rates are incredibly important for lenders, as they allow them to price in all their fixed and unforeseen costs. Factors such as the lender’s costs and risks, and consumer demand for credit all affect how expensive or inexpensive credit will be. Any short-term interest rate includes many financial factors, such as a borrower’s risk of default and fixed costs of operating a business.',
        },
      ],
      [
        {
          text: 'It’s clear that some members of Congress are more interested in trying to score political points regarding payday lending than the actual policy merits and unintended consequences of a 36% government-imposed price control. It is unfortunate that many lawmakers talk about making credit and financial services more accessible to traditionally under-banked populations are at the same time pushing disastrous policies that would severely hamper consumer markets.',
        },
      ],
      [
        {
          text: 'Thomas Aiello is the policy and government affairs manager at the National Taxpayers Union.',
        },
      ],
      [
        {
          text: 'The COVID-19 pandemic has created unprecedented hardship for millions of families in all corners of our country. More than',
        },
        {
          text: '16 million people',
          href: 'https://www.cnbc.com/2020/08/07/the-unemployment-rate-fell-in-july-heres-why-thats-important.html',
        },
        {
          text: 'were unemployed in July, countless businesses are either prohibited from operating or significantly limited in their operations due to state- and city-wide lockdown orders, and a third of people have reported a loss of income. Not only is the pandemic a public health emergency, but combined with its financial impacts it is a recipe for catastrophe.',
        },
      ],
    ],
  },
  'the-washington-post-plays-fast-and-loose-in-coverage-of-cfpb-performance-during-pandemic':
    {
      slug: 'the-washington-post-plays-fast-and-loose-in-coverage-of-cfpb-performance-during-pandemic',
      source: {
        href: 'https://cei.org/blog/the-washington-post-plays-fast-and-loose-in-coverage-of-cfpb-performance-during-pandemic/',
      },
      paragraphs: [
        [
          { text: 'In a recent' },
          {
            text: 'piece',
            href: 'https://www.washingtonpost.com/opinions/2020/08/01/cfpb-once-defended-consumers-thanks-trump-it-now-helps-companies-prey-them-instead/',
          },
          {
            text: ', Washington Post Opinions Contributor Helaine Olen slammed CFPB Director Kathy Kraninger for doing too little to protect consumers during the COVID-19 pandemic. Olen claims that since the start of the pandemic, Kraninger—nominated by President Trump and confirmed by the Senate to serve as director in 2018—has done more to deregulate the payday loan industry than protect consumers from its predatory lending practices.',
          },
        ],
        [
          { text: 'While it’s true that Kraninger went forward with a' },
          {
            text: 'modest measure',
            href: 'https://www.consumerfinance.gov/about-us/newsroom/cfpb-issues-final-rule-small-dollar-lending/',
          },
          {
            text: 'to revise the bureau’s preexisting small-dollar loan rule in July, it’s wrong to argue that this was without cause or anti-consumer. In fact, Obama-appointed Director Richard Cordray’s previously proposed rule would have led to the',
          },
          {
            text: 'near-elimination',
            href: 'https://cei.org/content/how-consumer-financial-protection-bureaus-payday-loan-rule-hurts-working-poor',
          },
          {
            text: 'of the industry, wiping out $11 billion in consumer credit. This would have greatly harmed the',
          },
          {
            text: '12 million Americans',
            href: 'https://www.pewtrusts.org/en/research-and-analysis/fact-sheets/2016/01/payday-loan-facts-and-the-cfpbs-impact',
          },
          {
            text: 'who use small-dollar loans each year, potentially stripping these consumers of a vital source of credit and forcing them to choose between financial ruin or borrowing from dubious “loan sharks” who offer illegal loans and often threaten physical violence.',
          },
        ],
        [
          {
            text: 'Additionally, efforts to rewrite and issue a final rule had been underway long before the start of the pandemic. The original',
          },
          {
            text: 'public statement',
            href: 'https://www.consumerfinance.gov/about-us/newsroom/public-statement-regarding-payday-rule-reconsideration-and-delay-compliance-date/',
          },
          {
            text: 'that announced that the bureau was looking to reconsider and delay implementation of the rule came in October 2018, during the tenure of Kraninger’s predecessor, Acting Director Mick Mulvaney. In February of 2019, the bureau, now under the leadership of Director Kraninger, formally introduced two proposals to delay the compliance date and rescind the mandatory underwriting portion of the rule. Stakeholders then had months to comment on the proposals (CEI’s comments can be found',
          },
          {
            text: 'here',
            href: 'https://cei.org/content/cei-comments-cfpb-payday-loan-rule',
          },
          { text: '), and despite' },
          {
            text: 'expecting',
            href: 'https://cei.org/blog/regulators-should-rescind-small-dollar-loan-rule',
          },
          {
            text: 'it to be released sooner than it was, the final rule wasn’t issued until last month—well over a year after the original proposals were released.',
          },
        ],
        [
          { text: 'While the final rule' },
          {
            text: 'should have gone further',
            href: 'https://cei.org/content/cfpb-offers-relief-small-dollar-loans',
          },
          {
            text: 'and gotten rid of Cordray’s small-dollar loan rule entirely, the bureau did right in striking the egregious ability-to-repay requirement, which was a paternalistic attempt to restrict borrowers’ ability to make their own financial decisions. If a borrower had the ability to repay, she would have not utilized a payday loan and instead opted to use their credit card or savings. This requirement would have effectively denied credit to those consumers who need it the most. Rescinding the ability-to-repay provision will ensure access to credit for cash-strapped consumers who may not be able to turn to other sources of credit.',
          },
        ],
        [
          { text: 'In addition to this action, the new' },
          {
            text: 'no-action letter policies',
            href: 'https://cei.org/content/cfpb-signals-new-policies-small-dollar-lending-mortgages',
          },
          {
            text: 'that the bureau unveiled in May will help consumers make better financial choices and access new and innovative financial products.',
          },
        ],
        [
          {
            text: 'Beyond the question of payday lending deregulation, Olen makes the argument that Kraninger has “shown little interest in doing her purported job” by putting “the interests of the wealthiest segments of our economy over the well-being of everyone else.” While Olen never details what she thinks Kraninger should be doing exactly, Olen nonetheless asserts that Kraninger isn’t doing what she should.',
          },
        ],
        [
          {
            text: 'In actuality, Kraninger has done a great deal to help consumers since the start of the pandemic. In her recent',
          },
          {
            text: 'testimony',
            href: 'https://www.consumerfinance.gov/about-us/newsroom/oral-testimony-director-kraninger-house-financial-services-committee/',
          },
          {
            text: 'before the House Financial Services Committee, Kraninger noted that the bureau has produced more than 70 blog posts and videos to help educate consumers and assist them in managing their finances during these hard times. Those resources have been accessed directly by more than 3 million users and been sent out to over 41 million users thanks to the bureau’s social media reach and efforts to make the materials available in seven different languages. The bureau has also released materials that cover new COVID-related programs, including stimulus payments, student loan payment suspension, mortgage forbearance, and the paycheck protection program. It also has created a consumer relief guide for foreclosure protection and an elder fraud prevention and response networks development guide to help combat elder financial exploitation.',
          },
        ],
        [
          {
            text: 'Even more off the mark is Olen’s accusation that Kraninger’s financial knowhow is “limited to how she can best serve the all-powerful financial sector.” Since her previous testimony in February, Kraninger has requested that Congress allow the bureau to compensate whistleblowers exposing fair lending violations. The bureau also just issued a',
          },
          {
            text: 'request for information',
            href: 'https://www.consumerfinance.gov/policy-compliance/notice-opportunities-comment/open-notices/request-information-equal-credit-opportunity-act-and-regulation-b/',
          },
          {
            text: 'in July on how to best prevent credit discrimination and expand access to credit.',
          },
        ],
        [
          { text: 'While CEI continues to hold the belief that the CFPB is' },
          {
            text: 'unconstitutional',
            href: 'https://cei.org/content/supreme-courts-ruling-cfpb-good-advance-accountability-not-great-one',
          },
          {
            text: 'and questions whether we need a government agency dealing in financial literacy and education, it is nonetheless hard to make the argument that Kraninger is sitting on her hands or inattentive to consumers’ wellbeing.',
          },
        ],
      ],
    },
  'cfpbs-correct-decision-to-rescind-payday-limits-comes-at-the-right-time': {
    slug: 'cfpbs-correct-decision-to-rescind-payday-limits-comes-at-the-right-time',
    source: {
      href: 'https://www.americanbanker.com/opinion/cfpbs-correct-decision-to-rescind-payday-limits-comes-at-right-time',
    },
    paragraphs: [
      [
        {
          text: 'The coronavirus pandemic has both revealed and dispelled a number of assumptions about consumer-spending habits during difficult times.',
        },
      ],
      [
        {
          text: 'While popular wisdom would suggest that times of economic hardship lead more Americans to seek short-term, small-dollar loans, some states have reported the opposite with declining loan volumes at the start of the pandemic.',
        },
      ],
      [
        {
          text: 'The drop in short-term, small-dollar demand dispelled some long-standing criticisms that consumers cannot make financial decisions for themselves. Customers know best how to manage their own finances and should be trusted to make their own financial decisions.',
        },
      ],
      [
        {
          text: 'Thankfully, consumers were given more choice when the Consumer Financial Protection Bureau this week',
        },
        {
          text: 'rescinded small-dollar restrictions',
          href: 'https://www.americanbanker.com/news/cfpb-makes-it-official-rescinds-cordray-era-limits-on-payday-lenders',
        },
        {
          text: 'placed on lenders by the former head of the agency, Richard Cordray.',
        },
      ],
      [
        { text: 'This move will right many of the' },
        {
          text: 'wrongs of the Cordray-era rule',
          href: 'https://www.americanbanker.com/news/cfpbs-final-payday-rule-should-be-ready-in-spring-agency-says',
        },
        {
          text: '. Not least of which was the onerous ability-to-repay provisions that set requirements that no lender, especially a small business, could meet. More important, the reconsideration preserves access to credit for those who need it and will help them continue to properly handle their own finances.',
        },
      ],
      [
        {
          text: 'Consider recent state-level reports that showed transaction volume dropped by 20% in',
        },
        {
          text: 'Alabama',
          href: 'https://urldefense.proofpoint.com/v2/url?u=https-3A__www.cfsaa.com_files_files_Alabama-2520March-2520Veritec-2520Report.pdf&d=DwMFaQ&c=9wxE0DgWbPxd1HCzjwN8Eaww1--ViDajIU4RXCxgSXE&r=1ru9yqArJ3etd_IucEx3ZtBo5Lz2eVtahrYl_2Oybns&m=RF81uT7OB8acb_oU1e9OMQrHi4ic_ghNbejgzViCUIM&s=lr5kGJ5Mx-0Bln7Hm7M0BeF-XXknGg8V32xaskdClv0&e=',
        },
        { text: 'from February to March and by 35% in' },
        {
          text: 'Indiana',
          href: 'https://urldefense.proofpoint.com/v2/url?u=https-3A__www.cfsaa.com_files_files_Indiana-2520April-2520Veritec-2520Report.pdf&d=DwMFaQ&c=9wxE0DgWbPxd1HCzjwN8Eaww1--ViDajIU4RXCxgSXE&r=1ru9yqArJ3etd_IucEx3ZtBo5Lz2eVtahrYl_2Oybns&m=RF81uT7OB8acb_oU1e9OMQrHi4ic_ghNbejgzViCUIM&s=wFpLTD3fLqomkDy8BJyD-Ad8Yh-bgnecofnB6pd7hd0&e=',
        },
        {
          text: 'from March to April, when the pandemic started in the U.S. As Americans find their financial situations changing this year, many consumers have paid off loans, curtailed spending and chosen not to seek out small-dollar loans. This goes to show that many of them are knowledgeable about their own financial lives and managing it to their best ability.',
        },
      ],
      [
        {
          text: 'Furthermore, a recent CFPB study of consumer complaints it received that included “coronavirus” keywords found that less than 1% of those complaints were about a payday loan when compared to other financial products, such as mortgages, credit cards or debt collection.',
        },
      ],
      [
        {
          text: 'Even though fewer people are currently choosing small-dollar loans, it is critically important that those who do need such loans are able to access licensed and regulated forms of credit from transparent and trustworthy lenders. That’s why most licensed and regulated small-dollar lenders were',
        },
        {
          text: 'deemed essential businesses',
          href: 'https://urldefense.proofpoint.com/v2/url?u=https-3A__www.cisa.gov_sites_default_files_publications_Version-5F3.0-5FCISA-5FGuidance-5Fon-5FEssential-5FCritical-5FInfrastructure-5FWorkers-5F1.pdf&d=DwMFaQ&c=9wxE0DgWbPxd1HCzjwN8Eaww1--ViDajIU4RXCxgSXE&r=1ru9yqArJ3etd_IucEx3ZtBo5Lz2eVtahrYl_2Oybns&m=RF81uT7OB8acb_oU1e9OMQrHi4ic_ghNbejgzViCUIM&s=tdg-DkgSoYc4o1pZM3xZGLGyoe735GCkjnCx-LFsOQ4&e=',
        },
        { text: 'during the pandemic.' },
      ],
      [
        {
          text: 'More broadly, this crisis has also underscored the importance of regulations that balance consumer protection with access to credit, and ensure that customers can get the loans they need during uncertain times.',
        },
      ],
      [
        {
          text: 'The action by the CFPB to rescind its previous small-dollar, short-term loan restrictions was a step in the right direction. A one-size-fits-all approach would have eliminated consumer choice and undermined the progress state lawmakers and regulators have made to ensure safe, reliable credit options are available for their consumers.',
        },
      ],
      [
        {
          text: 'Now that the CFPB has reconsidered its flawed 2017 small-dollar lending rule, the agency should continue listening to consumers who use these important financial products when deciding how to appropriately balance access to credit with consumer protection.',
        },
      ],
    ],
  },
  'consumers-win-as-consumer-financial-protection-bureau-finalizes-payday-loan-rule':
    {
      slug: 'consumers-win-as-consumer-financial-protection-bureau-finalizes-payday-loan-rule',
      source: {
        href: 'https://www.forbes.com/sites/norbertmichel/2020/07/08/consumers-win-as-consumer-financial-protection-bureau-finalizes-payday-loan-rule/?sh=259312024903',
      },
      paragraphs: [
        [
          { text: 'On Tuesday, the Consumer Financial Protection Bureau' },
          {
            text: 'officially rescinded',
            href: 'https://www.consumerfinance.gov/policy-compliance/rulemaking/final-rules/payday-vehicle-title-and-certain-high-cost-installment-loans-revocation-rule/',
          },
          {
            text: 'the most harmful provisions of its 2017 payday lending rule. Good riddance.',
          },
        ],
        [
          {
            text: 'Thankfully, Bureau Director Kathy Kraninger stood up to the onslaught from so-called consumer activists trying to keep the old rule in place. In the official announcement,',
          },
          {
            text: 'Kraninger (correctly) notes that',
            href: 'https://www.consumerfinance.gov/about-us/newsroom/cfpb-issues-final-rule-small-dollar-lending/',
          },
          { text: ':' },
        ],
        [
          {
            text: 'A vibrant and well-functioning financial marketplace is important for consumers to access the financial products they need and ensure they are protected. Our actions today ensure that consumers have access to credit from a competitive marketplace, have the best information to make informed financial decisions, and retain key protections without hindering that access.',
          },
        ],
        [
          {
            text: 'Detractors of the rule frequently talk about the importance of maintaining access to credit, but their goal is really to provide access to credit only on terms that they think are appropriate. The associate director of the National Consumer Law Center, for instance,',
          },
          {
            text: 'wants a national rate cap',
            href: 'https://www.cnbc.com/2020/07/07/new-payday-loan-rules-could-leave-millions-of-americans-exposed-to-debt-trap.html',
          },
          {
            text: ', despite the fact that price controls end disastrously every time they are implemented.',
          },
        ],
        [
          {
            text: 'The best way to provide broad-based access to credit is to foster a competitive environment where lenders and borrowers can agree on the best terms for their circumstances.',
          },
        ],
        [
          {
            text: 'The old rule was driven by over-zealous paternalism and politics, not by evidence or anything resembling an interest in well-functioning financial markets. It',
          },
          {
            text: 'threatened to starve millions of hard working Americans out of short-term credit markets',
            href: 'http://dailysignal.com/2016/01/28/this-government-agency-is-crusading-after-small-lenders/',
          },
          {
            text: ', openly acknowledging its provisions might reduce lending in the industry',
          },
          {
            text: 'by as much as 84 percent',
            href: 'https://files.consumerfinance.gov/f/201503_cfpb_outline-of-the-proposals-from-small-business-review-panel.pdf',
          },
          { text: '.' },
        ],
        [
          {
            text: 'With such open hostility to an industry, one would think there must be hordes of angry customers and piles of evidence demonstrating grave harm done.',
          },
        ],
        [
          { text: 'The truth, though, is that the' },
          {
            text: 'activists failed to muster convincing evidence supporting their claim',
            href: 'https://www.heritage.org/markets-and-finance/report/dodd-frank-and-the-consumer-financial-protection-bureau-put-squeeze/#_ftn3',
          },
          {
            text: 'that small-dollar loan companies—even payday advance companies—were systemically trapping people in debt. To the contrary,',
          },
          {
            text: 'the evidence showed that',
            href: 'https://www.heritage.org/markets-and-finance/report/dodd-frank-and-the-consumer-financial-protection-bureau-put-squeeze/#_ftn3',
          },
          {
            text: 'these companies were regularly helping people get access to the credit they needed and that customers',
          },
          {
            text: 'typically understood exactly what they were getting into',
            href: 'https://www.heritage.org/markets-and-finance/report/dodd-frank-and-the-consumer-financial-protection-bureau-put-squeeze/#_ftn5',
          },
          { text: '.' },
        ],
        [
          {
            text: 'Typically, customers knowingly chose to roll over their payday loan before becoming debt-free, and',
          },
          {
            text: 'could accurately predict',
            href: 'https://www.heritage.org/markets-and-finance/report/dodd-frank-and-the-consumer-financial-protection-bureau-put-squeeze/#_ftn6',
          },
          {
            text: 'when they would be debt-free for one pay period. One researcher who spent four months working for RiteCheck reported that many payday customers',
          },
          {
            text: 'valued the lending service so much that they even tipped their tellers',
            href: 'http://www.citylab.com/work/2013/09/why-poor-choose-go-without-bank-accounts/6783/',
          },
          { text: '.' },
        ],
        [
          {
            text: 'But none of this has ever mattered to the advocates of the restrictive 2017 rule, a group that still oozes open hostility to private businesses.',
          },
        ],
        [
          { text: 'One of them, Sen. Elizabeth Warren, D-Mass.,' },
          {
            text: 'called the decision',
            href: 'https://www.cnn.com/2020/07/08/politics/cfpb-payday-lender-rule/index.html',
          },
          {
            text: 'to rescind the rule’s underwriting provisions “appalling,” and former Bureau Director Richard Cordray, who was responsible for the original rule,',
          },
          {
            text: 'said that',
            href: 'https://www.cnn.com/2020/07/08/politics/cfpb-payday-lender-rule/index.html',
          },
          {
            text: '“Protecting consumers again takes a back seat to cater to the financial industry.”',
          },
        ],
        [
          {
            text: 'But Warren and Cordray fail to acknowledge several key facts.',
          },
        ],
        [
          {
            text: 'For starters, federal and state consumer protection laws have protected payday customers from unfair and deceptive practices since long before the Bureau existed. The notion that a lender could outright trick a borrower and get away with it is just false.',
          },
        ],
        [
          {
            text: 'Separately, private businesses thrive by satisfying their customers, not by regularly abusing them. It is ludicrous to suggest that rescinding a rule that would have effectively ended a common business practice is “catering” to an industry.',
          },
        ],
        [
          {
            text: 'Thankfully, the Bureau now seems to understand that private exchanges are mutually beneficial and that people can be trusted to figure out what works best for their own situations. The final rule officially “withdraws the [2017] Rule’s determination that consumers do not understand the materials risks, costs, or conditions of covered loans, as well as its determination that consumers do not have the ability to protect their interests in selecting or using covered loans.”',
          },
        ],
        [
          { text: 'My colleagues and I' },
          {
            text: 'have not exactly been fans of the CFPB',
            href: 'https://www.heritage.org/sites/default/files/2017-05/BG3214.pdf',
          },
          {
            text: ', but the Bureau was right to rescind these provisions in the 2017 payday rule. This',
          },
          {
            text: 'new final rule is a great step toward helping',
            href: 'https://www.consumerfinance.gov/about-us/newsroom/cfpb-issues-final-rule-small-dollar-lending/',
          },
          {
            text: '“to ensure the continued availability of small-dollar lending products for consumers who demand them, including those who may have a particular need for such products as a result of the current pandemic.”',
          },
        ],
        [
          {
            text: 'Incidentally, in May, the Bureau also released No-Action Letter (NAL) Templates,',
          },
          {
            text: 'one of which is designed so that',
            href: 'https://www.consumerfinance.gov/about-us/newsroom/cfpb-helps-struggling-homeowners-seeking-mitigation-efforts-consumers-seeking-small-dollar-loans/',
          },
          {
            text: '“insured depository institutions can…apply for a NAL covering their small-dollar credit products.” For the last few decades, other federal regulators (and compliance costs) have pushed banks out of the small dollar lending space, so this NAL should, at the very least, provide some regulatory certainty to banks who want to make these loans.',
          },
        ],
        [
          {
            text: 'The CFPB’s 2017 payday lending rule was unnecessary and harmful. This final rule is a huge improvement. Kraninger deserves credit for sticking to her guns and trying to broaden access to credit by fostering competition.',
          },
        ],
      ],
    },
  'virginias-biggest-payday-loan-firm-is-leaving-state-as-crackdown-looms': {
    slug: 'virginias-biggest-payday-loan-firm-is-leaving-state-as-crackdown-looms',
    source: {
      href: 'https://www.dailypress.com/business/consumer/dp-nw-loan-licenses-surrendered-20200601-w24ssimypnbkvdi3fzagobkf2e-story.html',
    },
    paragraphs: [
      [
        {
          text: 'Virginia’s largest payday lender is pulling out of the state ahead of stricter new regulations that will take effect next year.',
        },
      ],
      [
        {
          text: 'Advance America surrendered its payday and title loan licenses last week, said Joe Face, commissioner of the Virginia Bureau of Financial Institutions.',
        },
      ],
      [
        {
          text: 'So did Express Check Advance, which shares a South Carolina headquarters with Advance America.',
        },
      ],
      [
        {
          text: 'A payday loan is a short-term advance of up to $500, secured by a post-dated check for a higher amount. That surcharge and the interest lenders have been allowed to charge has amounted to the equivalent of an annual interest rate of as much as 818%, Bureau of Financial Institutions data show. The rate averaged 251% in 2018, the latest year for which data is available.',
        },
      ],
      [
        {
          text: 'Title loans are secured by the borrower’s car or truck, which means that if the borrower misses a payment, the lender can take the vehicle. These lenders had been allowed to charge interest rates of up to 268%, bureau data show.',
        },
      ],
      [
        {
          text: 'After January 1, interest for both types of loans will be capped at 36%. Payday lenders will be able to charge a monthly fee of up to $25, and title lenders a monthly fee of up to $15.',
        },
      ],
      [
        {
          text: '“Under-served consumers deserve opportunities for regulated, responsible credit, and rate caps like the new law’s 36% interest rate cap eliminate those options,” Jessica Rustin, Advance America’s chief legal officer said in an emailed statement.',
        },
      ],
      [
        {
          text: '“Under such restrictions, lenders simply cannot accommodate both the higher loss rates that come with serving the needs of subprime consumers and basic operating expenses, such as paying our employees and rent,” she added.',
        },
      ],
      [
        {
          text: 'In 2018, payday lenders had to write off 5% of their loans as uncollectible. Capital One, the Virginia-based credit card giant, also wrote off 5% of its loans that year, according to its financial filings with federal banking regulators.',
        },
      ],
      [
        {
          text: 'Rustin said Advance America’s Virginia customers offer what she described as overwhelming praise for the company’s loans, and worried that because many can’t qualify for credit cards or bank loans, they will turn to online lenders that charge even higher rates.',
        },
      ],
      [
        {
          text: 'Advance America operated 64 payday loan offices and 65 title loan stores, including eight in Hampton Roads. Surrendering its license means more than 200 employees statewide will lose their jobs, Rustin said.',
        },
      ],
      [
        {
          text: 'Express Check Advance had 11 payday and 12 title loan offices, including two in Hampton Roads.',
        },
      ],
      [
        {
          text: '“It’s simply not credible that payday lenders can’t operate under the new law,” said Jay Speer, executive director of the Virginia Poverty Law Center. “Payday lenders, including Advance America, offer a $500, 6-month loan in Colorado for $125. The new law lets them charge $204 for the same loan.”',
        },
      ],
      [
        {
          text: 'Speer said credit will still be available, adding that new, lower-cost lenders are planning to open as soon as the law takes effect.',
        },
      ],
      [
        {
          text: '“When other states have made law changes … lenders waited for the law to take effect before closing stores,” Speer said.',
        },
      ],
      [
        {
          text: 'He said payday lenders have reported loan volume has dropped since the coronavirus hit.',
        },
      ],
      [
        {
          text: '“And payday lenders may be having a harder time collecting on loans because so many people have become unemployed or had their hours cut,” he said. “Payday and title lenders have relied on their ability to collect rather than borrowers’ ability to repay when making loans.”',
        },
      ],
      [{ text: 'Dave Ress, 757-247-4535, dress@dailypress.com' }],
    ],
  },
  'short-term-loans-are-lifelines-for-many-americans': {
    slug: 'short-term-loans-are-lifelines-for-many-americans',
    source: {
      href: 'https://www.ocregister.com/2020/03/26/short-term-loans-are-lifelines-for-many-americans/',
    },
    paragraphs: [
      [
        {
          text: 'America’s economic shutdown, with its layoffs and business failures, could wipe out 5 to 6 million jobs in March alone, according to at least one estimate.',
        },
      ],
      [
        {
          text: 'Many people will have to take a pay cut or get their hours reduced. Many who don’t lose their jobs will have to live with salary cuts or reduced hours. Those at the bottom of the economic ladder will be hurt the most and are likely to find themselves in circumstances in which their income can’t meet sudden financial needs. Some will be able to replace their lost income by using their checking accounts’ overdraft protection, pulling cash advances from their credit cards, tapping into savings, taking out personal loans, or borrowing from family or friends.',
        },
      ],
      [
        {
          text: 'But not everyone has access to those alternatives. In a country where, according to the Federal Reserve Bank, nearly 40% of the adults don’t have the finances to cover a $400 emergency, and, says the Federal Deposit Insurance Corporation, more than 20 million live in unbanked households, the only option is an unsecured small-dollar short-term loan.',
        },
      ],
      [
        {
          text: 'Often called “payday loans,” they are lifelines to many. But they are frequently, and unjustly, maligned.',
        },
      ],
      [
        {
          text: 'A recent CNBC article headlined “In the face of an economic crisis, these are the best and worst ways to borrow money” represents the widespread bias toward short-term credit. It names payday loans as “the worst offenders” among the choices available for quick cash.',
        },
      ],
      [
        {
          text: 'In Washington state, the media are reporting financial counselors are warning consumers that the “unfolding coronavirus pandemic could cause a surge of desperate people” to take out “predatory payday loans,” while CNBC (again) tells readers to “avoid payday loans” in a story about “8 steps to take if you can’t make ends meet because of the coronavirus.”',
        },
      ],
      [
        {
          text: 'Despite efforts to poison their reputation, Americans value payday loans. According to Moebs Services, 23 million of us took out at least one payday loan in 2018. A Harris Poll learned that 96% of payday loan borrowers felt their experience was as expected or better than they expected regarding the terms, while 92% said the same about the cost. Ninety-five percent said the decision to borrow or not from payday lenders should be theirs alone, not the government’s.',
        },
      ],
      [
        {
          text: 'The typical small-dollar short-term loan is roughly $500. Its duration, says the St. Louis Fed, “usually matches the borrower’s payday schedule,” so it can be a week, two weeks, or a month. On that next payday, the full amount of the loan plus fees is due.',
        },
      ],
      [
        {
          text: 'The alternatives for those who need quick cash for emergency car or home repairs, unexpected medical bills, or just to pay the rent and eat in a time of lost income, are few and ugly. For instance, some who have bank accounts can rely on overdrafts to get them through. But it’s a poor choice. Pew Charitable Trusts says using overdraft programs is a form of “costly, inefficient credit.” There should be an emphasis on “costly.” While consumers spend $9 billion annually on small-dollar short-term loan fees, they pay nearly $35 billion a year in overdraft charges.',
        },
      ],
      [
        {
          text: 'Those who have no overdraft protection yet still write checks backed by insufficient funds risk having their accounts closed, and worse. Knowingly paying with a check that will bounce can be a misdemeanor, and in some states a felony.',
        },
      ],
      [
        {
          text: 'Other alternatives when a payday loan isn’t an option include pawn shops, where interest rates are high, and loss of property — the collateral put up for the loan — is a possibility when the money can’t be repaid under the terms. The more desperate borrowers will be driven into the clutches of the black market, where they will go into debt to loan sharks. In these underground arrangements, interest rates are steep and the penalty for late payment can be the loss of borrower’s health.',
        },
      ],
      [
        {
          text: 'As the economic shutdown continues to take a toll, many Americans may simply have no good choices but to take out small-dollar short-term loans. Though harsh regulatory regimes make it difficult for lenders to extend credit in some states, payday loans are still legal in 38. Lawmakers in states where the loans are prohibited should lift the restrictions, at least on a temporary emergency basis, so those who need loans can secure them online without worrying about legal restrictions.',
        },
      ],
      [
        {
          text: 'The legal states that have erected insurmountable regulatory barriers, such as California, where a 36% rate cap “is a de facto ban” on small-dollar short-term lending because it doesn’t allow lenders to earn a profit that will keep them in business, also need to relax their rules.',
        },
      ],
      [
        {
          text: 'Elected officials need to understand how cruel it is to block the millions of Americans whose circumstances are far different than theirs from obtaining the loans they need.',
        },
      ],
    ],
  },
  'liberal-nonprofit-recruits-cfpb-official-who-gave-it-special-access': {
    slug: 'liberal-nonprofit-recruits-cfpb-official-who-gave-it-special-access',
    source: {
      href: 'https://freebeacon.com/issues/liberal-nonprofit-recruits-cfpb-official-who-gave-it-special-access/',
    },
    paragraphs: [
      [
        {
          text: 'A progressive nonprofit recruited a top Consumer Financial Protection Bureau official who gave its activists significant access to the agency’s policy and hiring decisions.',
        },
      ],
      [
        {
          text: 'The Center for Responsible Lending (CRL) brought on David Silberman, the former acting deputy director of the bureau, as a senior adviser in early February. While at the CFPB, Silberman repeatedly solicited advice from the progressive group when writing regulations and filling senior CFPB jobs, internal emails reveal. He had a particularly close relationship with CRL president Michael Calhoun.',
        },
      ],
      [
        {
          text: 'Silberman was the CFPB’s associate director for research, markets, and regulations starting in 2011 and was acting deputy director of the entire agency from 2016 to 2017. CRL’s decision is the most recent example of the revolving door between CRL and CFPB, a friendly relationship that has given the progressive group outsized clout in the agency. Conservatives have frequently criticized CFPB as an',
        },
        {
          text: 'unaccountable',
          href: 'https://reason.com/2018/02/16/the-consumer-financial-protection-bureau/',
        },
        { text: ',' },
        {
          text: 'left-leaning',
          href: 'https://thehill.com/opinion/finance/373251-its-time-to-audit-the-cfpb',
        },
        { text: 'regulator that uses government power to push a' },
        {
          text: 'partisan agenda',
          href: 'https://www.nationalreview.com/2017/11/cfpbs-appointment-dispute-confirms-its-partisan-nature/',
        },
        { text: '.' },
      ],
      [
        {
          text: 'CRL',
          href: 'https://www.responsiblelending.org/sites/default/files/uploads/10-payday-loans.pdf',
        },
        {
          text: 'is one of many progressive groups pushing for new regulations on the payday loan industry. Such groups criticize payday loans—which often go toward covering living expenses or emergency expenditures—as exploitative because high interest rates can send poor people into debt spirals and bankruptcy. When surveyed in 2016, 94 percent of payday loan borrowers',
        },
        {
          text: 'said',
          href: 'https://freebeacon.com/issues/poll-payday-borrowers-overwhelmingly-approve-of-service/',
        },
        {
          text: 'taking out the loans can be a “sensible decision” during financial emergencies. Some of CRL’s recommended policies',
        },
        {
          text: 'funneled',
          href: 'https://freebeacon.com/issues/how-a-credit-unions-left-wing-execs-got-uncle-sam-to-shut-down-the-competition/',
        },
        {
          text: 'business into the Self-Help Credit Union, an affiliate of CRL, by urging federal regulators like CFPB to quash competitors in the short-term loan business.',
        },
      ],
      [
        {
          text: 'CFPB adopted some of CRL’s policy recommendations—such as the ability-to-repay provision that requires lenders to certify that the borrowers can repay the loan and meet living expenses—in its final',
        },
        {
          text: 'rules',
          href: 'https://files.consumerfinance.gov/f/documents/201710_cfpb_executive-summary_payday-loans-rule.pdf',
        },
        {
          text: 'released in 2017. The agency planned to implement the rules in 2019, but the new CFPB director appointed by President Donald Trump temporarily',
        },
        {
          text: 'shelved',
          href: 'https://www.consumerfinance.gov/policy-compliance/guidance/payday-lending-rule/',
        },
        { text: 'those plans.' },
      ],
      [
        {
          text: 'When the CFPB was starting to consider regulations on payday loans, Silberman attended an exclusive CRL briefing for CFPB staffers about payday loans in August 2013, according to the emails. The briefing discussed a CRL',
        },
        {
          text: 'report',
          href: 'https://www.responsiblelending.org/sites/default/files/uploads/10-payday-loans.pdf',
        },
        {
          text: 'that sharply criticized the payday loans as a “debt treadmill” and recommended severe restrictions on the industry.',
        },
      ],
      [
        {
          text: 'Silberman soon started to actively consult CRL about payday loan regulation, meeting often with Calhoun. He met with the CRL president so frequently that he once complained of “withdrawal pains” when he could not schedule a meeting for three weeks. On another occasion, he wrote about “need[ing] a Calhoun fix.”',
        },
      ],
      [
        {
          text: '“I’m lonely,” Silberman wrote to Calhoun in a 2015 email. “Do you have time to get together next week? No specific agenda items but always good to talk.”',
        },
      ],
      [
        {
          text: 'The most overt example of collaboration between the duo took place in April 2014, when Silberman asked Calhoun to send him an outline about payday loans. Calhoun replied minutes later in an email with the outline, asking Silberman to “feel free to improve it!”',
        },
      ],
      [
        {
          text: 'Neither CRL nor the Self-Help Credit Union responded to requests for comment. CFPB also did not respond to a request for comment.',
        },
      ],
      [
        {
          text: 'The internal emails were first obtained via a Freedom of Information Act request filed by the Community Financial Services Association, a payday loan industry trade group.',
        },
      ],
      [
        {
          text: 'Silberman also helped an alumna of a CRL affiliate get a job in the senior leadership of the agency. When CFPB was looking for a new assistant director of financial education, Silberman asked Calhoun if he had “anyone you want to throw into the mix” for consideration in March 2014. Calhoun responded by recommending Janneke Ratcliffe, a former employee of the Self-Help Credit Union.',
        },
      ],
      [
        {
          text: 'CFPB ultimately hired Ratcliffe for the job, which she still holds. The position is',
        },
        {
          text: 'listed',
          href: 'https://www.consumerfinance.gov/about-us/the-bureau/bureau-structure/',
        },
        { text: 'as one of the agency’s senior leadership positions.' },
      ],
      [
        {
          text: 'Silberman and Ratcliffe are not the only people to work for both CRL and CFPB. Leslie Parrish, a senior CRL researcher from 2005 until 2011,',
        },
        {
          text: 'worked',
          href: 'https://www.linkedin.com/in/leslie-parrish-87124722/',
        },
        {
          text: 'for CFPB between 2011 and 2013. She returned to CRL in 2013, then in 2015 took on another job at CFPB, where she stayed until 2018. Will Corbett, CRL’s litigation director,',
        },
        {
          text: 'was',
          href: 'https://www.responsiblelending.org/profile/will-corbett',
        },
        { text: 'senior counsel for CFPB until 2018.' },
      ],
      [
        {
          text: 'Conservative critics of the CFPB have frequently zeroed in on the autonomy of the agency’s director, whom the president cannot fire without cause. The Supreme Court heard oral arguments about the issue on Tuesday and will soon decide whether the agency director’s independence is an unconstitutional encroachment on the president’s authority.',
        },
      ],
    ],
  },
  'bloomberg-sanders-and-warren-want-to-use-post-offices-as-banks': {
    slug: 'bloomberg-sanders-and-warren-want-to-use-post-offices-as-banks',
    source: {
      href: 'https://fortune.com/2020/03/04/post-office-banks-sanders-warren-bloomberg/',
    },
    paragraphs: [
      [
        {
          text: 'Most American city dwellers are used to seeing a favorite ice cream shop or watering hole seemingly replaced overnight with a shiny new consumer bank. The switch from PBR to APR can be quick and ruthless, but it has come to be expected.',
        },
      ],
      [
        {
          text: 'Now, proposals by presidential candidates former New York City Mayor Michael Bloomberg, Sen. Bernie Sanders (I-Vt.), and Sen. Elizabeth Warren (D-Mass.) could turn the United States Postal Service’s 31,324 offices into quasi-banks.',
        },
      ],
    ],
  },
  'congressional-leaders-want-to-deny-access-to-cash-for-struggling-americans':
    {
      slug: 'congressional-leaders-want-to-deny-access-to-cash-for-struggling-americans',
      source: {
        href: 'https://www.iwf.org/2020/02/05/congressional-leaders-want-to-deny-access-to-cash-for-struggling-americans/',
      },
      paragraphs: [
        [
          {
            text: 'If you had a $400 emergency like car damage or sudden medical bill, could you afford to pay it?',
          },
        ],
        [
          {
            text: 'Unfortunately, 40 percent of Americans (and half of military families) don’t have enough saved to cover such a bill. They might turn to payday or title lending company for a quick loan, knowing they would be able to pay it back from their next paycheck.',
          },
        ],
        [
          {
            text: 'Millions of Americans rely on lending companies for access to cash and capital when they need it, but members of Congress may shut these options down if they get their way. It will only drive our military servicemen and women and struggling Americans living paycheck-to-paycheck to turn to more costly alternatives like overdrafting accounts or late payment fees.',
          },
        ],
        [
          {
            text: 'Today, Congresswoman Maxine Waters is hosting a hearing entitled, “Rent-A-Bank Schemes and New Debt Traps: Assessing Efforts to Evade State Consumer Protections and Interest Rate Caps.” Don’t let the title fool you. Congresswoman Waters wants to shut down the small-dollar loan industry (i.e. payday loans) by limiting how much interest they can charge borrowers to 36 percent. That 36-percent cap is applied to loans for service members and she wants to extend it to all Americans.',
          },
        ],
        [
          {
            text: 'Proponents of this cap claim this will protect borrowers from paying high interest rates that sometimes they cannot afford to repay on time. That is not what would happen.',
          },
        ],
        [
          {
            text: 'The 36-percent cap for service members may have been well-intended by Congress but ended up cutting them off from small-dollar loans. According to one poll, a majority of military households have been denied loan products and access to credit because of this congressional interest rate cap.',
          },
        ],
      ],
    },
  'how-each-state-is-shaping-the-personal-finance-iq-of-its-students': {
    slug: 'how-each-state-is-shaping-the-personal-finance-iq-of-its-students',
    source: {
      href: 'https://www.cnbc.com/2020/02/05/how-each-us-state-is-shaping-the-personal-finance-iq-of-students.html',
    },
    paragraphs: [
      [
        {
          text: 'Americans choose where they live for many reasons, including access to a quality education for their children. But families may not pay close attention to one educational standard that varies from state to state and can have big implications for financial well-being and, in particular, student debt: high school personal finance content.',
        },
      ],
      [
        {
          text: 'There’s increasing evidence that students who are required to learn financial literacy as part of a state’s education curriculum make better financial decisions across multiple, and critical, early adult-life money decisions. That includes how to pay for college — understanding available grants and financial aid, as well as government vs. private student loans — and avoiding payday lenders and credit card debt.',
        },
      ],
      [
        {
          text: '“Research shows that these requirements make a difference,” said Nan Morrison, the president and CEO of the Council for Economic Education, which released its biannual Survey of the States on Wednesday, a detailed state-by-state look at the economics and personal finance standards and requirements in K–12 state education systems.',
        },
      ],
      [
        {
          text: '“College debt is real, and kids in the last population bump are living with it now … and having kids now. … The need to be financially responsible is not going away,” Morrison said. Individuals need to be “on the ball and in control” earlier in life, she said, and the first step is financial literacy.',
        },
      ],
    ],
  },
  'restricting-short-term-loans-in-virginia-will-hurt-consumers': {
    slug: 'restricting-short-term-loans-in-virginia-will-hurt-consumers',
    source: {
      href: 'https://dailytorch.com/2020/02/restricting-short-term-loans-in-virginia-will-hurt-consumers/',
    },
    paragraphs: [
      [
        {
          text: 'The Virginia legislature is rushing to pass a bill that would have disastrous consequences for Old Dominion residents.',
        },
      ],
      [
        {
          text: 'In the coming weeks, a law that would cap at 36 percent the interest rate on short-term loans up to $2,500 and impose other limits on lenders will be voted on in the General Assembly after the bill passed through committee.',
        },
      ],
      [
        {
          text: 'Rep. Terry Kilgore argues the potential adverse impacts of the bill are not being thoroughly considered. “We have no statute to cover somebody offshore. [The bill is] going to drive a lot of people to the internet and offshore lending,” he said.',
        },
      ],
      [
        {
          text: 'In contrast to this hastily assembled bill, the current small-dollar lending regulations were carefully crafted by lawmakers, in consultation with stakeholders representing consumers and lenders, to balance access to credit while preserving critical consumer protections.',
        },
      ],
      [
        {
          text: 'The new bill would undo these regulations in favor of measures restricting Virginians’ consumer choice, forcing those who need cash to turn to unregulated sources.',
        },
      ],
      [
        {
          text: 'People in need of cash to pay bills or cover unexpected expenses like car repairs will not disappear after this law is passed. Virginians will instead turn to unregulated lenders, pawnshops and lenders who are uncompetitive in Virginia, but who will offer loans if the state drives their competition out of business.',
        },
      ],
      [
        {
          text: 'Several out-of-state lenders publicly support the bill and promise to provide loans in Virginia if the bill passes. There is no guarantee these businesses, who have no track record of serving Virginia consumers, will be reliable lenders. Additionally, most of these companies have strict standards that would exclude many of those who use short-term loans.',
        },
      ],
      [
        {
          text: 'What’s more, if these outside corporations offered a better deal for Virginia consumers, they would already be winning the business of consumers due to their superior, lower-cost product.',
        },
      ],
      [
        {
          text: 'The simple truth is that the legal, regulated short-term loan business met needs that traditional banking establishments failed to meet. In fact, the usurious fees for account overdrafts contribute greatly to the de-banking of our nation’s least affluent consumers.',
        },
      ],
    ],
  },
  'lets-not-hinder-consumers-access-to-credit': {
    slug: 'lets-not-hinder-consumers-access-to-credit',
    source: {
      href: 'https://thehill.com/opinion/finance/482153-lets-not-hinder-consumers-access-to-credit/',
    },
    paragraphs: [
      [
        {
          text: 'Perhaps coincidentally an organization not wholly unfamiliar with less than reputable financial institutions, the Center for Responsible Lending, released a poll that indicated a bipartisan majority of American consumers supported a 36 percent rate cap on pay day and installment loans.',
        },
      ],
      [
        {
          text: 'Let me be clear, there are plenty of predatory payday lenders out there taking advantage of unsuspecting consumers. It’s a worthy goal to protect consumers from predatory or unscrupulous lending practices by payday or vehicle title lenders.',
        },
      ],
      [
        {
          text: 'But CRL rigged its poll outcome by asking an incomplete question: “As you may know, the average annual interest rate on payday loans is 391 percent. Would you support or oppose a proposal to put a cap on the interest rates that payday lenders may charge at 36 percent annual interest?”',
        },
      ],
      [{ text: 'When asked that way, who wouldn’t agree?' }],
      [
        {
          text: 'But the rest of the question should have been “… even if it means that consumers would not be able to borrow funds of less than $2,500.” That’s because a rate cap on all consumer loans would make it much harder for working Americans to borrow the funds they need for everything from car repairs, refrigerators or furniture. For example, a study on the costs to offer consumer credit by the National Commission on Consumer Finance found that the break-even APR for a 12-month $1,000 loan is 77 percent.',
        },
      ],
      [
        {
          text: 'Another academic study found that to break-even under the proposed 36 percent cap, traditional installment loans would have to be at least $2,600 to $4,000. Many Americans don’t need loans that large, and moreover, they may not qualify for them. Taking away the option for small loans, however, doesn’t remove the need for access to these products.',
        },
      ],
      [
        {
          text: 'Consumer advocates point to high APRs as a hallmark of unfair or predatory loans. Those “outrageous” interest rates they tout often sound too crazy to be true … because they usually are if one is dealing with a responsible lender.',
        },
      ],
      [
        {
          text: 'Consumer advocates rarely take the time to explain that the length of a loan is a crucial factor in APR.',
        },
      ],
    ],
  },
  'has-ohios-law-banished-unscrupulous-payday-lending-kind-of': {
    slug: 'has-ohios-law-banished-unscrupulous-payday-lending-kind-of',
    source: {
      href: 'https://www.cincinnati.com/restricted/?return=https%3A%2F%2Fwww.cincinnati.com%2Fstory%2Fnews%2Fpolitics%2F2020%2F01%2F02%2Fhas-ohios-law-banished-unscrupulous-payday-lending-kind-of%2F4318561002%2F',
    },
    paragraphs: [
      [
        {
          text: 'Fighting unscrupulous payday lenders has been the Ohio politics version of whack-a-mole for years.',
        },
      ],
      [
        {
          text: 'Voters passed restrictions in 2008, but the industry circumvented them. Ohio lawmakers tried to rein in astronomical interest rates and businesses battled back. The quarrel even ensnared former Ohio House Speaker Cliff Rosenberger, leading him to resign over questionable travel with payday lending lobbyists.',
        },
      ],
      [
        {
          text: 'In late April, a new law took effect to limit how much payday lenders can loan customers and how much they can charge in interest and fees.',
        },
      ],
      [
        {
          text: 'So perhaps it’s not surprising that some bad actors – many of them online – are finding ways to charge sky-high interest rates and fees on loans approved after Ohio’s new law took effect.',
        },
      ],
      [
        {
          text: 'The Enquirer reviewed 15 complaints filed with Ohio Attorney General Dave Yost’s office about loans issued after April 27.',
        },
      ],
      [
        {
          text: 'In one complaint, a Bond Hill woman said she took out an $800 loan in early May. Under the new law, the most she should have paid in fees and interest was $480 – 60 percent of the initial loan amount. But the online tribal lender, which isn’t registered in Ohio, was demanding $3,000.',
        },
      ],
      [
        {
          text: 'In another complaint, a Columbus-area woman said she received an online loan in August for $700. So far, she has paid back nearly $790, but the company is asking for more than $1,000 in addition to what she’s already paid.',
        },
      ],
      [
        {
          text: '“When she tries to contact the company, she waits on hold for 40 minutes,” according to the complaint. “Then they kick her off, and they ask her to send an email.”',
        },
      ],
      [
        {
          text: 'Rep. Kyle Koehler, R-Springfield, who championed the payday lending changes, said he received a disturbing call from his local clerk of court’s office, saying an elderly couple was seeking a power of attorney form to send their vehicle’s title to California to secure a loan in Ohio.',
        },
      ],
      [
        {
          text: 'Changes in the Ohio law should prevent borrowers from using their vehicles’ registration as collateral for loans.',
        },
      ],
      [
        {
          text: '“That’s very disappointing,” Koehler told The Enquirer. “Going to this extent to prey on an elderly couple.”',
        },
      ],
    ],
  },
  'its-hard-to-manage-your-credit-when-youve-never-heard-of-interest': {
    slug: 'its-hard-to-manage-your-credit-when-youve-never-heard-of-interest',
    source: { href: 'https://www.southcoasttoday.com/errors/404/' },
    paragraphs: [
      [
        {
          text: 'We kept using the word ‘interest’ and we kept getting blank stares,” Ball recalled. Finally, she asked the students who knew what interest is. No one did.',
        },
      ],
      [
        {
          text: '“Here they were, about to be adults, two weeks before graduation — and they had no idea about interest on credit card payments,” said Ball, a former bankruptcy attorney. “That’s exactly how you get into trouble.”',
        },
      ],
      [
        {
          text: 'Kentucky is the 44th most financially literate state, according to a WalletHub analysis based on 15 metrics, including the availability of high school financial literacy classes and the share of adults with rainy day funds. And the state has the eighth-highest personal bankruptcy rate, with 345 bankruptcy filings per 100,000 residents. But this year Kentucky launched a two-part initiative to help its residents better live within their means.',
        },
      ],
      [
        {
          text: 'Beginning with ninth graders in 2020, Kentucky will require a financial literacy course before high school graduation. And assuming the courts allow its work-for-Medicaid plan to proceed, the state will offer financial literacy instruction to some Medicaid recipients who are required to work.',
        },
      ],
      [
        {
          text: 'Kentucky’s focus on requiring financial education reflects a budding consensus among policymakers, academics, the finance industry and parents that states need to do more to ensure that students — and adults — learn how to manage credit, craft a budget, borrow for large purchases and save for retirement.',
        },
      ],
      [
        {
          text: 'Three other states — Arizona, Iowa and Louisiana — also added financial literacy course requirements for high school graduation this year, according to the National Conference of State Legislatures.',
        },
      ],
      [
        {
          text: 'New Mexico, which already requires a high school personal finance course be offered, will study how to provide financial literacy training to foster care children and help them manage checking and savings accounts. Kansas, which does not require a course, passed a law this year requiring financial assistance for individuals receiving compensation for wrongful convictions.',
        },
      ],
      [
        {
          text: 'Until this year, only 17 states required a personal finance course for high school graduation, according to the Council for Economic Education’s 2018 Survey of the States.',
        },
      ],
      [
        {
          text: 'The uptick in activity this year comes as Americans sink deeper in debt. U.S. household debt reached $13.2 trillion in the first quarter of 2018, the 15th consecutive quarter increase. That’s higher than in the third quarter of 2008 during the financial crisis. Student loan debt reached a record $1.5 trillion in the first quarter of 2018.',
        },
      ],
      [
        {
          text: 'As students have taken on more debt, more state and private universities have started to offer them financial literacy workshops and counseling.',
        },
      ],
      [
        {
          text: 'But Stacey Abrams — a Democrat who lost her bid to be governor of Georgia, and the former minority leader of the Georgia House of Representatives — knows firsthand that a top-notch education and a high-paying job are no guarantee against personal debt.',
        },
      ],
      [
        {
          text: 'Owing more than $200,000 in credit card debt, student loan debt and federal back taxes, Abrams has a repayment plan with the IRS.',
        },
      ],
      [
        {
          text: '“I am in debt, but I am not alone. Debt is a millstone that weighs down more than three-quarters of Americans,” she wrote in an op-ed in Fortune.',
        },
      ],
      [
        {
          text: '“I had racked up student loans, and throughout college and beyond, I’d swiftly turned every credit card application into those magical slivers of plastic that allowed me to pay for daily necessities,” she wrote.',
        },
      ],
      [
        {
          text: 'Even when she finished Yale Law School in 1999 and landed a job paying $95,000 a year — three times more than her parents ever made combined, she said — Abrams remained mired in debt because family members needed her help. She used her credit cards again.',
        },
      ],
      [
        {
          text: 'For states, pressing forward on financial education means a raft of questions and answers that are likely to anger one group or another. Do we make financial literacy a condition of graduation? Will it be a stand-alone class or covered with other subjects? And, of course, how will we pay for it?',
        },
      ],
      [
        {
          text: 'In Kentucky, policymakers tried and failed for at least six years before enacting the financial literacy measure into law.',
        },
      ],
      [
        {
          text: '“The answer to fixing this crisis long-term begins in childhood,” Ball, a Republican who has made financial literacy a priority, wrote in an op-ed endorsing the measure. “The best time to learn basic principles of saving and money management is before a person graduates from high school and enters the workforce.”',
        },
      ],
      [
        {
          text: 'Kentucky’s work-for-Medicaid plan is currently on hold. On June 29, a federal judge stopped the rollout scheduled for July 1 and sent the plan back to the federal government, which granted the waiver that allowed Kentucky to add the requirements. The state hopes the plan will be reapproved by fall, said Adam Meier, secretary of Kentucky’s Cabinet for Health and Family Services.',
        },
      ],
      [
        {
          text: 'If Kentucky proceeds, Medicaid recipients who fail to meet the work requirements will be offered a choice of online health or financial literacy classes. Members also will be able to take the classes to build credits toward dental or other benefits not included in their benefits package. They will learn such things as how to budget, open a bank account, balance a checkbook and deal with credit.',
        },
      ],
      [{ text: 'Nearly a third of Kentuckians receive Medicaid.' }],
      [
        {
          text: '“Financial literacy is an issue across the board, but it’s particularly acute with low-income people, who are often unbanked and more vulnerable to payday lenders,” said Meier.',
        },
      ],
      [
        {
          text: 'Meanwhile, the Kentucky Department of Education is drawing up standards for the high school financial literacy requirement. School districts will have wide latitude in deciding how to satisfy the requirement, Ball said. No statewide test is likely, nor is there a budget for the new requirement. She said she plans to form a public-private foundation to cover costs.',
        },
      ],
      [
        {
          text: 'There’s no shortage of educational materials by financial institutions and other organizations, and some are free. But there’s a complication.',
        },
      ],
      [
        {
          text: '“People cannot find results that financial literacy education works,” said Lauren Willis, a professor at Loyola Law School in Los Angeles and a prominent critic of financial literacy education.',
        },
      ],
      [
        {
          text: 'While it’s possible to test someone’s knowledge of financial concepts like compound interest or inflation, there’s no way to know whether he or she remembers and acts on the concepts over a lifetime.',
        },
      ],
      [
        {
          text: '“It used to be, the way credit was managed, if the bank gave you a loan, you knew you were credit-worthy,” Willis said, because banks wouldn’t make risky loans. “Now you have to decide for yourself whether to take a loan and what kind.”',
        },
      ],
      [
        {
          text: 'Other countries do better. The United States ranked 14th in the world for financial literacy in Standard & Poor’s 2014 Global Financial Literacy Survey of more than 140 countries. Only 57 percent of American adults were found to be financially literate.',
        },
      ],
      [
        {
          text: 'Ideally, every state would require a financial literacy class with an exam for high school graduation, said Laura Levine, president of the JumpStart Coalition for Personal Financial Literacy, a nonprofit based in Washington, D.C. That’s not likely anytime soon, so the coalition has a more modest aim.',
        },
      ],
      [
        {
          text: 'The coalition, which has more than a hundred national organizations as members as well as affiliates in every state, launched Project Groundswell in April. The goal: to increase by a quarter the number of elementary, middle and high school students receiving “effective classroom-based financial education” by 2025. The coalition is working on specific goals and standards for effective programs.',
        },
      ],
      [
        {
          text: 'Groundswell hopes to inspire more parents like Daniel Nestel in Montgomery County, Maryland, and grandparents to get involved.',
        },
      ],
      [
        {
          text: 'Nestel, whose background is in financial education, was surprised when his 10th-grade daughter said she was learning about credit scores in her Advanced Placement government class.',
        },
      ],
      [
        {
          text: '“It seemed completely out of context,” said Nestel. “It’s too important to be taught at the end of the class at the end of the school year.”',
        },
      ],
      [
        {
          text: 'Nestel started reaching out to local and state school officials and to financial literacy experts. He learned the Maryland Board of Education set financial literacy standards for grades 3 to 12 in 2011, but left implementing them up to each school district.',
        },
      ],
      [
        {
          text: 'He wants a semester course on financial literacy with exams in high school.',
        },
      ],
      [
        {
          text: '“I’m trying to start the conversation,” he said. “Tell me what course is more important than personal finance? It touches every student.”',
        },
      ],
    ],
  },
  'a-national-interest-rate-cap-would-harm-consumers-in-the-name-of-consumers':
    {
      slug: 'a-national-interest-rate-cap-would-harm-consumers-in-the-name-of-consumers',
      source: {
        href: 'https://thehill.com/opinion/finance/462188-a-national-interest-rate-cap-would-harm-consumers-in-the-name-of-consumers/',
      },
      paragraphs: [
        [
          {
            text: 'The California legislature just passed a financial policy that would have dreadful consequences for the consumers it seeks to protect. Congress is considering a similar measure as Senator Richard Durbin (D-Ill.) reintroduced a bill and the House Financial Services Committee held a hearing on the issue and could mark-up legislation.',
          },
        ],
        [
          {
            text: 'The proposed bill would impose a nationwide interest rate limit of 36 percent. The implicit targets of this bill are payday and other lenders who charge high interest rates for small loans. Far from protecting lower-income consumers from “predatory lending practices,” however, a national rate cap of 36 percent would effectively cut credit lines to roughly 12 million payday consumers, many of whom have few other legal options for borrowing.',
          },
        ],
        [
          {
            text: 'Also troubling, the proposed rate cap would likely eliminate the installment lending market, as well. Installment loans, which have average annual interest rates of 40 to 90 percent, represent the closest alternative to payday loans. They are used by an estimated 10 million consumers each year.',
          },
        ],
        [
          {
            text: 'That the 36 percent rate cap would be so harmful for consumers might not be obvious. But the reasoning is straightforward. Interest rates are simply the price we pay for credit. Factors such as the lender’s costs and risks, the bank’s desire for profit, and consumer demand for credit all affect how expensive or inexpensive credit will be.',
          },
        ],
        [
          {
            text: 'At bottom, interest rates are not so different than the cost of a cup of coffee or a gallon of gas. Far from arbitrary, these prices are contingent on a variety of factors, just like interest rates.',
          },
        ],
        [
          {
            text: 'A national rate cap is essentially a price control. According to basic economic theory, applying an artificially low price will likely result in an artificially low supply.',
          },
        ],
        [
          {
            text: 'Thankfully, we don’t need to rely on analogy or theory to consider the merits of an interest rate cap. It’s not exactly a new idea, after all.',
          },
        ],
        [
          {
            text: 'One example: Between 1979 and 1986, 34 states removed or relaxed their rate caps for various reasons. Credit card issuers in the 16 states with restrictive caps rejected more applicants, charged higher fees and offered lower credit limits over the next few years.',
          },
        ],
        [
          {
            text: 'Summarizing the historical evidence on the effects of rate caps, the authors of Consumer Credit and the American Economy concluded, “state interest rate ceilings restricted credit availability…for higher-risk borrowers.”',
          },
        ],
        [
          {
            text: 'Rate caps, according to proponents, are supposed to protect financially vulnerable Americans, not cut their access to loans. So, why would they have this effect? To answer this question, we have to dig a little deeper into how credit is priced.',
          },
        ],
        [
          {
            text: 'Fixed costs, including things like employee salaries and building rent, are especially important in the pricing of credit. These costs apply to all loans a lender makes, whether they be for $100 or $100,000, and interest rates help lenders recoup them. As a general rule, the smaller the loan, the higher the necessary interest rate. Conversely, banks can usually afford to attach smaller rates to larger loans.',
          },
        ],
        [
          {
            text: 'Tom Miller, professor of finance at Mississippi State University, sheds light on this dynamic in his book How Do Small-Dollar, Nonbank Loans Work? “Although a 36 percent interest rate might sound ‘high’ and ‘profitable,’” Miller writes, “personal installment loans are profitable at that rate only if the loan exceeds a certain size threshold.”',
          },
        ],
        [
          {
            text: 'He then demonstrates that, under a 36 percent interest rate cap, loans with principal less than $2,600 fail to turn a profit.',
          },
        ],
        [
          {
            text: 'By restricting lenders’ use of interest rates to drive revenue, the 36 percent national rate cap would incentivize lenders to make more large, long-term loans to recoup their fixed costs. An unfortunate side effect of this incentive structure would likely be the shutting out of riskier borrowers or borrowers seeking smaller lines of credit.',
          },
        ],
        [
          {
            text: '“To make these larger loans,” Miller writes, “lenders engage in more rigorous underwriting, which means that fewer customers qualify as the loan size grows.”',
          },
        ],
        [
          {
            text: 'Mandating an annualized rate of 36 percent would effectively eliminate small-dollar loans as a credit option for millions of financially vulnerable Americans. To where will these consumers turn should the proposed bill pass?',
          },
        ],
        [
          {
            text: 'Interest rates are objective tools used to ensure Americans retain access to demanded credit. Congress might be able to legislate small-dollar lenders out of business, but it can’t legislate away the consumer need for small dollar loans. The proposed national interest rate cap ignores how interest rates work in service of an “us vs. them” political story.',
          },
        ],
        [
          {
            text: 'Considering how a national rate cap would harm vulnerable consumers, the policy could be characterized more accurately as “us vs. us.”',
          },
        ],
        [
          {
            text: 'Beau Brunson is director of policy and regulatory affairs at Consumers’ Research. Joe Conway is a research fellow at Consumers’ Research.',
          },
        ],
      ],
    },
  'if-you-hate-payday-loans-come-up-with-a-better-system': {
    slug: 'if-you-hate-payday-loans-come-up-with-a-better-system',
    source: {
      href: 'https://www.washingtonexaminer.com/opinion/if-you-hate-payday-loans-come-up-with-a-better-system',
    },
    paragraphs: [
      [
        {
          text: 'It might seem a little odd to advise a closer attention to Maoist philosophy to an organization already as left-wing as the Center for Responsible Lending — who would ban payday loans just because they think people shouldn’t get what the people want. Following their response to a column of mine seems necessary.',
        },
      ],
      [
        {
          text: 'P.J. O’Rouke’s telling of the tale is slightly rude, so I’ll paraphrase: The way to get people to do something is to make it the best of their available options. The way to stop them from doing something is to offer them a better such option.',
        },
      ],
      [
        {
          text: 'The cat bites the hot pepper we’ve made when not biting it is a much more unappealing option.',
        },
      ],
      [
        {
          text: 'The specific issue here is the cost of payday loans. When translated into an annual percentage rate, these can apparently cost 400% and higher. This is obviously ghastly usury and financial trickery. But annual percentage rate isn’t a good way of measuring short term credit. That offering such a small sum and short term credit, as I originally noted, costs over 200% APR to provide without any profit or even profit motive is also true. But, OK, this is a moral outrage, we wish it to disappear from our fair land.',
        },
      ],
      [
        {
          text: 'Great. How do we do that? Ban people from charging what such loans cost to provide? That is the Center for Responsible Lending’s answer, yes. Being the cynic — perhaps just experienced in the ways of men — that I am I would note this only stops the people who obey the law. Those who collect money with baseball bats might not take much notice and even welcome the increase in business.',
        },
      ],
      [
        {
          text: 'Biting that hot pepper, the way to excise 400% payday loans from civilization, is to create a system which lends the money at a lower price. That might include credit unions, or government loans perhaps — plenty of European welfare states will provide a bit of cash in extremis. We can all think of other possible paths. My point, though, is that the urge to do away with it isn’t enough.',
        },
      ],
      [
        {
          text: 'It is necessary to build that alternative first. We must show that the system can indeed be made better by creating that better alternative, not banning the current arrangements. Once we’ve created it, we outcompete the old system and it disappears without the need for legislation or coercion.',
        },
      ],
      [
        {
          text: 'If the Center for Responsible Lending wants there to be no payday lending, then it’s incumbent upon the Center for Responsible Lending to build that better system, not ban the best answer we’ve currently got. As Mao said, we’ve got to make the cat want to bite the hot pepper. Providing people with a lower cost alternative to payday loans would do just that.',
        },
      ],
      [
        {
          text: 'Of course, it’s possible that there is no other viable and lower cost method. But if that’s true, then how come it’s righteous to ban the best we can do?',
        },
      ],
      [
        {
          text: 'Tim Worstall (@worstall) is a contributor to the Washington Examiner’s Beltway Confidential blog. He is a senior fellow at the Adam Smith Institute. You can read all his pieces at The Continental Telegraph.',
        },
      ],
    ],
  },
  'bernie-sanders-and-aoc-basically-want-to-ban-credit-cards': {
    slug: 'bernie-sanders-and-aoc-basically-want-to-ban-credit-cards',
    source: {
      href: 'https://www.washingtonexaminer.com/tag/alexandria-ocasio-cortez?source=%2Fopinion%2Fbernie-sanders-and-aoc-basically-want-to-ban-credit-cards',
    },
    paragraphs: [
      [
        {
          text: 'Rep. Alexandria Ocsaio-Cortez, D-N.Y., and 2020 candidate Sen. Bernie Sanders, I-Vt., have apparently decided to try to ban credit cards. Sure, that’s not quite what Ocasio-Cortez and Sanders actually say (they just want to stop the swindlers profiting from excessive interest charges), but that’s the effect of their plan. They argue that interest rates should be capped at 15%. There’s a question about exceptions, but that’s what they mean. If you cap the price of something below the cost of production, then that thing vanishes. No one makes it (who desires to make a loss?) and therefore no one can have it.',
        },
      ],
      [
        {
          text: 'It’s quite similar to the Venezuelan policy on food prices. Make chicken nice and cheap with a price ceiling so no one can have any.',
        },
      ],
      [
        {
          text: 'Interest rates are simply a price, they’re just the cost of money. They work the same way as all other prices. As The Federal Reserve of New York noted when considering payday loans: “ Except for the ten to twelve million people who use them every year, just about everybody hates payday loans. “ They also pointed out that payday loans are expensive to provide. As the New York Times reported way back in 2007 (long enough surely for even Sanders to have gotten the news) thrift stores providing nonprofit payday loans still had to charge north of a 200% annual percentage rate just to break even. Thus, as the Fed says, interest rate caps abolish payday loans:',
        },
      ],
      [
        {
          text: 'The Center for Responsible Lending (CRL), a nonprofit created by a credit union and a staunch foe of payday lending, has recommended capping annual rates at 36 percent “to spring the (debt) trap.” The CRL is technically correct, but only because a 36 percent cap eliminates payday loans altogether. If payday lenders earn normal profits when they charge $15 per $100 per two weeks, as the evidence suggests, they must surely lose money at $1.38 per $100 (equivalent to a 36 percent APR.) In fact, Pew Charitable Trusts (p. 20) notes that storefront payday lenders “are not found” in states with a 36 percent cap, and researchers treat a 36 percent cap as an outright ban. In view of this, “36 percenters” may want to reconsider their position, unless of course their goal is to eliminate payday loans altogether.',
        },
      ],
      [
        {
          text: 'That reference to “normal profits” is how we can and should work out whether loan rates are “too high.” Or, in the economic jargon, are providing excess profits as a result of market power. There’s an average return to capital across the country and economy. People who consistently make more than that are making those excess profits. They’re either terribly, terribly, good at what they do in a non-repeatable manner or there’s some regulatory barrier to people competing with them. We like that first reason and abhor that second.',
        },
      ],
      [
        {
          text: 'Normal profits are defined as making the same sort of return on capital as can be found in those other businesses in other parts of the economy. As with payday loans, there’s no evidence that credit card providers are making such excess. So, prices aren’t “too high,” they simply reflect the cost of providing the service. The biggest cost is those people who never do repay what they borrow on those credit cards.',
        },
      ],
      [
        {
          text: 'None of this is remotely controversial among those who have been bothering to pay attention. But then there’s people like Sanders and Ocasio-Cortez. An example of their devotion to detail is the manner in which they talk about credit unions having had a 15% interest rate cap, including upon credit card balances, since 1980. Their knowledge of reality would be enhanced if they noted that it has actually been 18% since 1987. Knowing how the world works is a useful prelude, precursor, and even precondition to forming plans to change how it works.',
        },
      ],
      [
        {
          text: 'But sighs about economic ignorance aren’t enough here. They’re calling this the Loan Shark Prevention Act, something it most definitely isn’t. So, people who desire credit (an awful lot of Americans, given that there’s about $1 trillion of this card debt out there) can’t get it legally because prices have been set so low that there are no providers. What happens next? They’ll go get that credit illegally, won’t they? That is, this is the Loan Sharks Generation Act.',
        },
      ],
      [
        {
          text: 'Quite why Sanders and Ocasio-Cortez wish to drive a hundred million or so Americans into the clutches of the leg breakers is uncertain. But shouldn’t we be getting angry at their blatant shilling for such a despicable industry? For that is what they’re doing — price controls on legal and legitimate debt, to the point of its disappearance, just produce good times for the local neighborhood knee-breaker. It’s even possible to muse that this might not quite be a useful goal of public policy.',
        },
      ],
    ],
  },
  '40-of-americans-cant-cover-a-400-emergency-expense': {
    slug: '40-of-americans-cant-cover-a-400-emergency-expense',
    source: {
      href: 'https://money.cnn.com/2018/05/22/pf/emergency-expenses-household-finances/index.html',
    },
    paragraphs: [
      [{ text: 'Can you cover an unexpected $400 expense?' }],
      [
        {
          text: 'Four in ten Americans can’t, according to a new report from the Federal Reserve Board. Those who don’t have the cash on hand say they’d have to cover it by borrowing or selling something.',
        },
      ],
      [
        {
          text: 'The bright side? That’s an improvement from half of adults being unable to cover such an expense in 2013. The number has been ticking down each year since.',
        },
      ],
      [
        {
          text: 'Overall, the financial situation of American households has improved during the past five years, according to the Economic Well-Being of U.S. Households report. It shows that in 2017, 74% of adults reported feeling at least “okay” financially, an increase of 10 percentage points from the first survey four years earlier.',
        },
      ],
      [
        {
          text: '“This year’s survey finds that rising levels of employment are translating into improved financial conditions for many but not all Americans,” Federal Reserve Board Governor Lael Brainard said in a press release, “with one-third now reporting they are living comfortably and another 40% reporting they are doing okay financially.”',
        },
      ],
      [
        {
          text: 'Still, many are struggling. Notable differences remain across race, ethnicity, education levels and geography. The report shows hardship continues for people working to repay college loans, cover emergency expenses and manage retirement savings.',
        },
      ],
      [
        {
          text: 'For the first time the report also looked at the opioid epidemic, reporting that one out of five adults personally knows someone with an addiction to painkillers. Exposure does not vary much by education level or by local economic conditions.',
        },
      ],
      [
        {
          text: 'The study was drawn from the Board’s fifth annual Survey of Household Economics and Decisionmaking, which looks at the economic health of Americans. The survey of 12,000 people examined their income, employment, unexpected expenses, banking and credit, housing, education, and retirement planning in November and December 2017.',
        },
      ],
      [
        {
          text: 'While showing that Americans’ financial lives are moving in a positive direction, the report does raise some concerns about their most basic levels of financial stability: emergency funds and retirement.',
        },
      ],
      [
        {
          text: '“The finding that four-in-ten adults couldn’t cover an unexpected $400 expense without selling something or borrowing money is troubling,” said Greg McBride, chief financial analyst at Bankrate.com. “Nothing is more fundamental to achieving financial stability than having savings that can be drawn upon when the unexpected occurs.”',
        },
      ],
      [
        {
          text: 'McBride suggests setting up automatic direct deposits from a paycheck to a savings account that can build some much-needed financial cushion.',
        },
      ],
      [
        {
          text: 'He’s also concerned about another finding in the report: fewer than 40% of adults think their retirement savings are on track.',
        },
      ],
      [
        {
          text: '“The burden is on us as individuals to save for our retirement,” he says. “Take control of your financial destiny by contributing to an employer-sponsored retirement plan such as a 401(k) via payroll deduction, or arrange automatic monthly transfers from your bank account into an IRA.”',
        },
      ],
      [
        {
          text: 'More concerning are the 25% of Americans with no retirement savings whatsoever, according to the report.',
        },
      ],
      [
        {
          text: 'Some of this may be due to the lack of employer-sponsored retirement plans, as well as people piecing together several part-time jobs, which may not offer benefits.',
        },
      ],
      [
        {
          text: 'The report found that while most workers are satisfied with the wages and benefits from their current job and are optimistic about their future job opportunities, challenges remain, particularly with irregular job schedules.',
        },
      ],
    ],
  },
  'loan-sharks-interest-rate-cap-would-hurt-those-its-designed-to-help': {
    slug: 'loan-sharks-interest-rate-cap-would-hurt-those-its-designed-to-help',
    source: {
      href: 'https://www.texarkanagazette.com/news/2019/may/20/loan-sharks-interest-rate-cap-would-hurt-those-its/',
    },
    paragraphs: [
      [
        {
          text: 'U.S. Sen. Bernie Sanders, I-Vt., and U.S. Rep Alexandria Ocasio-Cortez, D-N.Y., have an idea they think would do the public a lot of good.',
        },
      ],
      [
        {
          text: 'And it looks OK on paper. But the reality doesn’t measure up.',
        },
      ],
      [
        {
          text: 'Their idea is to put a maximum interest rate of 15 percent on credit cards. That sounds good in theory. Who wouldn’t like to stick it to those greedy bankers and Wall Street types? But it’s not that simple.',
        },
      ],
      [
        {
          text: '“There is no reason a person should pay more than 15% interest in the United States,” Ocasio-Cortez said last week.',
        },
      ],
      [
        {
          text: 'People need credit. Unfortunately, their credit records don’t always work to their favor. Higher interest rates are the way banks control risk. Those with lower credit scores pay higher rates for access to credit. The higher rates make up for the risk of default.',
        },
      ],
      [
        {
          text: 'If the banks can’t control risk, they simply will not grant credit to anyone without a top-notch score. And that means millions of Americans won’t be able to get credit or will lose the access to credit they now have.',
        },
      ],
      [
        {
          text: 'Reduced access to credit would mean less spending. That’s bad for the economy as a whole.',
        },
      ],
      [
        {
          text: 'The 15 percent cap would also apply to so-called fringe bankers, such as payday lenders. But there again the high rates make up for the considerable risk of lending to those without good credit or much in the way of assets. As much as those type of loans cost, they are often the only credit a low-income borrower has. A payday loan could mean the difference between having electricity or doing without. It could mean you can buy both medicine and food, instead of choosing one or the other. It could mean you can get your car repaired instead of losing a job because of lack of transportation.',
        },
      ],
      [
        {
          text: 'Banks have little interest or incentive to make such small loans. And they aren’t set up to give loans to those with bad credit.',
        },
      ],
      [
        {
          text: 'This type of legislation strikes the right emotional chords. But a 15 percent interest rate cap would hurt those Sanders and Ocasio-Cortez are trying to help.',
        },
      ],
    ],
  },
  'extra-credit': {
    slug: 'extra-credit',
    source: {
      href: 'https://www.arkansasonline.com/news/2019/may/19/others-say-extra-credit-20190518/',
    },
    paragraphs: [
      [
        {
          text: 'In 1978, the Supreme Court essentially gutted all state usury laws, freeing interest rates and sparking a credit card boom. Around that time, 38 percent of U.S. households had a credit card; as of 2014, 71 percent did. Total revolving debt rose from $48 billion in 1978 to $1 trillion today.',
        },
      ],
      [
        {
          text: 'The first thing to understand about the new 15 percent credit card interest cap proposal from Sen. Bernie Sanders, I-Vt., and Rep. Alexandria Ocasio-Cortez, D-N.Y., is that it would reverse this court ruling, effectively substituting a federal usury law for the previous state ones–and would authorize states to set their own caps lower than the federal one. Therefore, it would also reverse the 1978 ruling’s consequences, both the ones consumers dislike (higher rates for consumer credit) and the ones they do like (greater access to credit cards), although, to be sure, the precise magnitude of these effects is unknowable.',
        },
      ],
      [
        {
          text: 'The Sanders-Ocasio-Cortez bill posits that the costs to consumers of the 1978 ruling have outweighed the benefits–that banks exploit market power to charge exorbitant interest rates.',
        },
      ],
      [
        {
          text: 'No doubt credit card issuers are driven by profit, not compassion; equally undoubtedly, thousands of Americans have gotten in over their heads with high-interest, revolving credit card debt. But does mitigating these risks justify jeopardizing the benefits of the credit card boom–such as convenience, rewards programs and increased liquidity–for millions of households, probably the majority, who manage debt well?',
        },
      ],
      [
        {
          text: 'The answer is less clear than the bill’s sponsors claim. For big banks, the credit card business is indeed more profitable than others; yet much of the large spread between their cost of funds and interest rates they charge reflects overhead, including such costs as managing billions of transactions and covering unsecured losses. Meanwhile, only 2.5 percent of customers are delinquent on their cards, well below historical rates. Sanders and Ocasio-Cortez tout cards issued by nonprofit credit unions, whose rates are capped at 18 percent under federal law, as proof of their concept. Actually, it’s not an apples-to-apples comparison, because credit-union cards often impose conditions, such as certain forms of collateral or membership in a credit union, that banks don’t.',
        },
      ],
      [
        {
          text: 'Popular as the rate cap may be, credit card holders might develop second thoughts if it means lower credit limits, higher fees–or forfeiting access altogether. The Sanders-Ocasio-Cortez measure’s proposed workaround–empowering the Federal Reserve to grant banks temporary waivers to the 15 percent cap, if economic conditions require–would make the Fed the direct arbiter of household debt burdens, an inappropriate role for a politically independent central bank. Excessive regulation may push marginal borrowers to pawn brokers and payday lenders or, at the far margins, stimulate a black market for credit, making the bill’s title, the Loan Shark Prevention Act, ironic indeed.',
        },
      ],
    ],
  },
  'aoc-and-sanders-credit-card-interest-rate-cap-would-be-disasterous': {
    slug: 'aoc-and-sanders-credit-card-interest-rate-cap-would-be-disasterous',
    source: {
      href: 'https://www.cnn.com/2019/05/13/perspectives/aoc-bernie-sanders-credit-card-interest-rate-cap/index.html',
    },
    paragraphs: [
      [
        {
          text: 'Back in the early 1900s, Progressives helped drive loan sharks out of business by lobbying to lift state usury caps. Those caps had barred lenders from charging interest above 6% to 10% a year, forcing low-income Americans to seek credit in the illegal market. Now, Representative Alexandria Ocasio-Cortez and Senator Bernie Sanders want to bring back a similar usury law that would cap annual credit card interest rates at 15%.The ostensible aim of their proposal is laudable: to make credit more affordable for American households at a time when they carry a collective balance of $870 billion, with an average credit-card APR of 17.73%. But the consequences of a cap would be disastrous, removing access to credit for millions of low- and moderate-income households and forcing them to rely on family members, tighten their belts or seek higher-cost forms of credit.',
        },
      ],
      [
        {
          text: 'Ocasio-Cortez and Sanders wonder why banks charge double-digit interest if they can borrow funds at 2.5%, the rate at which banks lend to each other.',
        },
      ],
      [
        {
          text: 'But that is a misleading comparison. First, 2.5% is the rate banks pay on very short-term borrowing, which is less risky and therefore cheaper than longer-term consumer credit. Second, the business of banking is expensive. Banks spend time and resources screening borrowers to assess their creditworthiness. They invest in physical and virtual facilities to ensure the safety of customer funds and their personal information, online and offline. Banks also employ hundreds of thousands of staff to help customers find the products they need, understand the terms of each product, and service mortgages, small-business loans and credit-card debt.',
        },
      ],
      [
        {
          text: 'The ever-increasing number of regulatory mandates hasn’t helped lower the cost of providing banking services either. The financial industry is one of America’s most regulated sectors, with more than 27,000 new regulationsadded to the books since 2010. That regulatory accumulation goes some way to explain why the cost of financial intermediation hasn’t really gone down since 1960. It also explains why, despite all the talk about banker greed, the post-crisis return on equity for most banks remains comparably low at 10% to 12% — and concerningly low for the smallest banks, at 7.5%.',
        },
      ],
      [
        {
          text: 'Ocasio-Cortez and Sanders seem to assume that whatever is bad for the banks will be good for consumers. But the evidence from previous interventions suggests otherwise.',
        },
      ],
      [
        {
          text: 'After the financial crisis, legislators passed the Durbin Amendment, which capped the fees that banks could charge businesses for using debit cards in an attempt to lower consumer costs. But it hasn’t been successful. Banks have replaced their debit fee income with new fees on bank accounts and by requiring higher minimum balances. While businesses saw their debit card payment costs decline, they didn’t pass on those savings to consumers. What’s more, many consumers had to switch from debit to credit cards, and up to a million of them may have become unbanked due to the Durbin Amendment, according to a study by my colleague Todd Zywicki at George Mason University.',
        },
      ],
      [
        {
          text: 'With more than 8 million American households lacking a bank account and another 24 million without access to much consumer credit, it would be a reckless gamble to remove the few options many low-income Americans currently have by making it unprofitable to lend to them.',
        },
      ],
      [
        {
          text: 'The 15% cap would also apply to payday loans — a short-term alternative overwhelmingly used by people who simply have nowhere else to turn because their credit scores are very poor and they have high outstanding debts.',
        },
      ],
      [
        {
          text: 'Ocasio-Cortez and Sanders call payday lenders “loan sharks” to imply they abuse their customers. While annualized interest rates on payday loans look very high, one must keep in mind that the term of these loans is short, typically two weeks. Furthermore, payday loans are better than illegal alternatives that can result in higher rates or even criminal behavior. Yet, a 15% cap would make it impossible for most of these credit-constrained Americans to get credit through payday loans or other means.',
        },
      ],
      [
        {
          text: 'Rather than curtail the few ways in which many low-income families can gain some financial security today, Ocasio-Cortez and Sanders should think about how technology can increase access to payments and credit for underserved consumers. For example, the use of mobile money accounts has expanded at breakneck pace in Africa and Asia — leapfrogging physical bank branches and cards. Now that most Americans own a cell phone, mobile accounts offer a promising way to bring the unbanked into the financial system.',
        },
      ],
      [
        {
          text: 'Ocasio-Cortez and Sanders have a lower-tech solution in mind, though. They want the postal service to offer lending products to customers. But they haven’t explained how post offices could quickly gain the skills and technology needed for properly advising, underwriting and monitoring consumers. It’s not like public banking has been a great success elsewhere. For example, in Spain, publicly owned banks were at the epicenter of the financial crisis because politicians pushed them to lend to home buyers who couldn’t afford their mortgages when the market turned.',
        },
      ],
      [
        {
          text: 'Banks retreated from the market for small-dollar loans after regulators in 2013 issued guidance pressuring them to do so. Encouraging banks to resume lending to the underserved is a more promising solution than a new government monopoly in the form of postal banking.',
        },
      ],
      [
        {
          text: 'Ocasio-Cortez and Sanders call their bill the “Loan Shark Prevention Act,” but the historical evidence suggests that the measures the bill contains will only help real loan sharks flourish. Usury caps simply don’t work.',
        },
      ],
    ],
  },
  'the-unintended-consequences-of-interest-rate-caps': {
    slug: 'the-unintended-consequences-of-interest-rate-caps',
    source: {
      href: 'https://thehill.com/opinion/finance/444334-the-unintended-consequences-of-interest-rate-caps/',
    },
    paragraphs: [
      [
        {
          text: 'Last week, Sen. Bernie Sanders (I-Vt.) and Rep. Alexandria Ocasio-Cortez(D-N.Y.) introduced the Loan Shark Prevention Act amid a litany of references to executive compensation, payday lenders and credit card “rip offs.”',
        },
      ],
      [
        {
          text: 'They even invoked the Bible’s admonitions against usury. The bill would create a nationwide 15-percent annual percentage rate (APR) cap on interest rates on all consumer lending and credit cards purportedly to put money back in consumers’ pockets.',
        },
      ],
      [
        {
          text: 'The concept sounds great. Frankly, no one likes high interest rates. Commentators of various political persuasions have applauded it.',
        },
      ],
      [
        {
          text: 'Unfortunately, actions that politicize and regulate one aspect of a competitive market rarely have ever worked. More frequently, they have caused even greater financial pain and credit dislocation.',
        },
      ],
      [
        {
          text: 'The sponsors highlight the apparent unfairness of a median credit card interest rate of 21.36 percent, while the economy is still comfortably nestled in a low-interest-rate environment.',
        },
      ],
      [
        {
          text: 'In response, the bill adopts the provisions of another law already on the books that has limited the interest rate on credit union consumer loans and credit cards to 15-percent APR.',
        },
      ],
      [
        {
          text: 'That rate can be modified if the appropriate federal regulator decides to do so after “consultation” with the appropriate committees of the Congress, the Department of Treasury and other federal bank regulatory agencies.',
        },
      ],
      [
        {
          text: 'Sanders and Ocasio-Cortez suggest that the record of demonstrated success of this 15-percent cap on credit union lending over the last several decades should be replicated for all consumer lending.',
        },
      ],
      [
        {
          text: 'Unfortunately, credit unions have almost never lived under this 15-percent cap. Their regulator eliminated it in 1987, replacing it with an 18-percent rate in effect today. The exception for payday-type lending hovers around 28 percent.',
        },
      ],
      [
        {
          text: 'Credit unions are inadequate models for the feasibility of interest rate caps on all consumer lending throughout the nation. U.S. credit unions together are about one-half the size of J.P. Morgan. Moreover, credit unions don’t pay federal income tax, a government subsidy that allows them to charge lower interest rates.',
        },
      ],
      [
        {
          text: 'If exemption from federal income taxes in return for an interest rate cap that bank regulators could modify were also on the table, perhaps banks and credit card companies might be willing to participate in that conversation.',
        },
      ],
      [
        {
          text: 'The larger problem is that interest rate caps have rarely ever worked. In a competitive system, interest rates reflect a variety of financial factors, including credit history, customer defaults, transaction size, credit limits, rewards programs, collection proceedings and fraud. Median credit card rates also tend to obscure the real facts.',
        },
      ],
      [
        {
          text: 'As the bill’s sponsors effectively acknowledge, anyone can go online to compare the terms offered by dozens of credit card issuers to decide which best fits their financial situation. I did just that.',
        },
      ],
      [
        {
          text: 'Credit card issuers are currently offering rates online as low as 8.5 percent for a variable-rate credit card and higher APR cards that vary based on terms, credit limits, rewards programs and the applicant’s credit history.',
        },
      ],
      [
        {
          text: 'Most cards provide 30 days of free credit if the statement is paid on time, a feature that might disappear, along with rewards programs, if interest rate caps were created.',
        },
      ],
      [
        {
          text: 'The critical problem is economics 101. When caps are imposed and market rates are rising, lenders simply adjust their customer eligibility profile to correlate to the interest rates that can be charged.',
        },
      ],
      [
        {
          text: 'As a result, the bottom tier of borrowers lose access to credit. Since the passage of the CARD Act in 2009, which regulated many aspects of credit card terms and rates, but did not impose interest rate caps, approximately 14 million subprime cardholders have been pushed out of the credit card market.',
        },
      ],
      [
        {
          text: 'Every time that markets are distorted by non-economic factors, whether it be political or regulatory intervention, they react to that distortion and produce unintended consequences. Sometimes the result is good, sometimes bad and sometimes a disaster.',
        },
      ],
      [
        {
          text: 'The savings and loans crisis, for example, was brought to us by the combination of Congress’ enactment of 5.5-percent deposit interest rate caps in 1966, followed by state usury laws of around 8 percent.',
        },
      ],
      [
        {
          text: 'The collision of these two rate controls proved fatal when long-term market interest rates reached upward of 21 percent, and policymakers either didn’t act, took too long to act or took the wrong actions.',
        },
      ],
      [
        {
          text: 'In that regard, the provision in the bill that would allow interest rate caps to be increased after consultation with a host of congressional and regulatory authorities provides little comfort that a similar crisis could be averted.',
        },
      ],
      [
        {
          text: 'A research paper published by the Federal Reserve Bank of Chicago in 1982 stated that the weight of economic evidence supports the conclusion that “[u]sury laws can succeed in holding interest rates below their market levels only at the expense of reducing the supply of credit to borrowers.”',
        },
      ],
      [
        {
          text: 'Another paper presented just this year on the use of interest rate caps in Chile reiterates the direct trade-off between consumer protection and credit availability. The paper found a direct link between the lowering of interest rates through caps and a commensurate reduction of almost 20 percent in credit availability.',
        },
      ],
      [
        {
          text: 'Given the country’s track record of having the highest levels of regulation and the greatest frequency of financial crises of nearly any nation in the world in the last two centuries, legislators should be reticent to tinker with the economy until they have fully considered historical precedents and rigorously analyzed the likely array of economic reactions and alternatives.',
        },
      ],
      [
        {
          text: 'As attractive, popular and politically expedient as interest rate caps may seem, such actions ultimately are painful medicine for the folks that really need the help. When it comes to running the largest economy in the world, more care and deliberation would go a long way to making it work better for everyone.',
        },
      ],
    ],
  },
};
