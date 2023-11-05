# hackutdx-fannie-mae-challenge
HACKUTDX

This is our attempt at solving the problem statement given by Fannie Mae at HackUTDX 2023. 
(Please note that this is an incomplete project and will be soon completed)

We have used the following steps in our solution:
1) Imported the dataset and created columns for attributes like LTV, DTI and FEDTI. Created a column for Approval status.
2) If FEDTI > 28% or LTV > 95% or DTI > 43% set the value of the approval status to 'N'.
3) If FEDTI < 28% and LTV < 80% and DTI < 36% set the value of the approval status to 'Y'.
4) If LTV is between 80-95% or DTI is between 36-43% we used a k means clustering algorithm to divide the filtered dataset into two portions based on credit score, DTI and LTV. We labeled one cluster as 'Y' approval status and one cluster as 'N'.
5) After the data is thus labeled we determined the % of approved and not approved rows in the dataset and created the graphs.
6) Used a classification algorithm on the now labeled dataset. Accuracy (94%)
7) Developed a simple web application to predict whether a user's home loan request will be approved or not; and if not what are the major obstacles.

To run the react app:
Run `npm start` from the SalesApplication folder
\ Open [http://localhost:3000](http://localhost:3000) to view it in your browser
