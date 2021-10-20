# mpc-biz-intelligence

I am incredibly grateful to the owners of MPC for the opportunity they provided to me during the COVID-19 pandemic.  I was pursuing some entrepreneurial ideas in late 2019 and early 2020 before the pandemic.  When the pandemic started, the company was overwhelmed, and I jumped at the temporary opportunity to maintain cashflow given the economic uncertainty and to help the company grow.  Having worked for the company in various capacities since high school (I'm now 33 and 12 years out of undergrad!), I wanted to see if I could identify any hidden trends, strengths or weaknesses in their estimating model.  FULL DISCLOSURE: The co-owner of the company is my brother-in-law, hence why I have worked for the company here and there at various times.

Having worked for MPC in a sales and project management role from March 2020 to September 2021, I was curious to see if there are any trends when it comes to bids that the company wins and loses by time of year, neighborhood, project value, employee doing the bid, and other variables.  

Should the company raise or lower prices at certain times of the year?
Do certain employees have a higher success rate on certain job types or job values compared to the others?
Does the company earn a higher profit margin on certain job types or when using certain crews?

I am not working with ideal data for this project, but that is to be expected with a local small business that does not place a priority on data.  I was able to pull data on all estimates given from the customer management system, as well as use the private spreadsheet the accountant uses to track expenses, profits, etc.  I cleaned the data of any private information, leaving only the variables of concern.

Once the data was relatively clean (lots of null values for certain data, but that's ok), I was able to use mapbox and google to geomap all estimates.  The estimates are sized by the dollar value of the estimate, and they are colored red for estimates that the company did not win, and green for the estimates the company did win.  I am able to filter by the sales employeee who provided the estimate, as well as the date the estimate was given.

KEY FINDINGS
 - Pricing needs to be lowered in the southwest Denver Metro area during the spring and fall months to increase conversion rate.  The conversion rate in this area is much lower than in other areas.
 - The company's most profitable jobs are exterior residential re-paint jobs and interior cabinet jobs; these trends hold true across all zip codes ane employees.
 - Data was too sparse to determine most profitable subcontractor crews with meaningful accuracy.
 - The most profitable geographic region for the company is the Stapleton (now called Central Park) area, especially with exteriors.
 - The larger the bid amount, the less likely the company is to wind the bid.  This may limit the potential for profitability on commercial properties.

![image](https://user-images.githubusercontent.com/75816400/138143685-1e661668-11bb-4a27-8bb5-36ed0da533be.png)

Not available on this page is the use of constrained optimization techniques based on demand functions I created according to the data and company work capacity by job type.

The results were intuitive: the company should focus on cabinet jobs in the southwest and southeast regions of the Denver Metro Area during the winter, and focus on residential exteriors in Stapleton, Aurora, and Highlands Ranch in the summer.  Surprisingly, interior jobs are generally not highly profitable, so they should be targeted only when business in other categories is slow.

MOVING FORWARD

After this preliminary analysis, I want to use Machine Learning Techniques to try and identify the most profitable customer by zip code, time of year, and job type.  Should the company target advertising in certain neighborhoods for cabinets/exteriors/interiors at certain times of year?
