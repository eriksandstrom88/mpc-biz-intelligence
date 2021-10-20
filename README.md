# mpc-biz-intelligence

Project in progress.  Started on 10/5/2021, expected to be finished by 10/31/2021.

This project is a business intelligence endeavor to help a painting contractor identify strengths and weaknesses in their business model.  Specifically, I would like to find out which neighborhoods, job types, paint crews, times of year, estimating employees and project managers lead to the greatest profits and greatest "win" rate of estimates.  Is the company pricing paint jobs too high or too low in certain neighborhoods at certain times of year? Should the company focus advertising and marketing on a certain job type proven to be more profitable in certain neighborhoods?  Should only certain crews be used on certain job types?

Once the data is cleaned and organized, I will do some exploratory analysis in Jupyter Notebook.  Next, I will use Leaflet to Geomap all the company's estimates and completed jobs, with filters/color coding/markers for job type, time of year, crew used, won/lost, and a heatmap of profitability by time of year.  The image below IS NOT FROM THIS PROJECT, but rather is from the company's invoicing/estimating/project management software.  The map I will create will look similar to this, with MUCH more functionality built-in.  The image below is from a homework assignment from the University of Denver's Data Analytics Bootcamp.

![temp map](https://user-images.githubusercontent.com/75816400/127788742-933d14c6-fcc5-47e0-a9f2-ff08400a09ae.JPG)

In later phases of the project, I will use constrained optimization techniques to identify the profit-maximizing balance of job types, neighborhoods, and crews used.

I have exported data in CSV format from the company's estimating, invoicing and project management software.  I have also been provided an expense/profit/loss spreadsheet by the company administrators.  Sensitive information needs to be removed and the data needs extensive cleaning and organizing before analysis can begin.

CSV with info on estimates done by the company has been uplodaded.  I already did some data cleaning in Excel to remove sensitive information.  I will do the rest of the data cleaning and preparation in Jupyter Notebook.  Cleaning tasks include: Filling in holes for which employee completed the estimate, filling in holes for which crew completed the labor, identifying the job type (exterior, interior, cabinets, etc.), filling in missing dates (will have to be manually referenced in company's software or estimated based on estimate ID numbers), creation of a categorical dummy variable for the different job statuses, creating a new column to identify multi-option estimates.

I also have an expense spreadsheet provided by the company owner.  It has a tremendous amount of sensitive information that needs to be cleaned.  It also needs to be completely re-formatted so it can be saved as a CSV.  Once the spreadsheet is cleaned and formatted properly, I will merge it with the estimate spreadsheet.
