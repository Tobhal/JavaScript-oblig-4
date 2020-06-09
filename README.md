# JavaScript-oblig-4

The goal of this assignment is to provide you with a chance to work towards a more complete application. More specifically to show

ability to write more complex and longer programs
 good use of variables in the right scope
writing functions and using arrays and strings
doing simple graphics
 

# General Description

The assignment builds on the previous one (Assignment 3) and extends it in a number of ways. The goal is to create a program that can allow the users to see how their expenses were distributed based on the Transaction Location. You will provide a graphical representation about total expenses for each Location and a detailed list for each Location based on user input. The whole application should function using a simple user interface.  

More specifically, you are required to complete Tasks 1 to 6. Task 7 is bonus and you do not have to do it. However, the students who complete Task 7 or even extend it will go to the Hall of Fame for this year. 

 

# Task 1: A working Assignment 3 

Incorporate all suggestions you got from your student assistants who marked Assignment 3. You need to turn it into a fully working program. The program should function in the way it was specified. If you have not received any suggestions and/or your program is working as expected you can skip  this part. Submit a link to a working assignment 3. 

 

# Task 2: Design the User Interface

Here your task is to design a user interface for your program. The user interface should contain the following elements:

FS (File Selector): a button to load the file (as in the previous assignment)
DL1 (Drop-down list 1): a drop-down list which users can select a specific transaction location or instruct the system to use all transaction locations 
T1 (Table 1): an HTML table with columns (Transaction) Type, (Transaction) Date, and (Transaction) Amount, and as many rows as the amount of transactions that need to be presented
T2 (Table 2): an HTML table with three columns minimum, maximum, and average (amount) and one row
GR1 (Graph 1): a Canvas area in which a graphical representation of the transactions will be presented as explained in Task 3 
Use pen and paper or any graphics program to sketch how you would place the different elements in a nice and usable manner.  

Implement this user interface. 

# Task 3: Draw a graphical representation of total expenses for each Location

Here, you need to draw a graphical representation of total expenses for each Location.  First, you need to calculate the total expenses for each Location, summing over all Transaction types. Then you need to present them graphically in GR1. Our suggestion is to use a vertical bar graph but you can use another visual representation if you d like to. If going for our suggestion, you will need to plot as many bars (rectangles) as Locations keeping their width constant and the distance between them fixed. The height of each graph should be proportional to the total amount spent in each Location for all Transaction Types. You will need to scale bar height so that it does not exceed the maximum area provided by the canvas. You also need to provide a  vertical axis and label each graph on the bottom according to the Location being presented.

Note: You do not need to write a generic scaling function to calculate bar heights for arbitrary expense amounts, if you find it complicated. In this case, just calculate the bar (or point) heights offline and plot bars using hard-coded heights. A generic scaling function may, however, be necessary to achieve the bonus task below.  

# Task 4: Querying by Location

Here, you need to implement the functionality necessary in order to query transactions by Location and summarize them using the minimum/maximum and average amount. The difference to the previous assignment is that depending on the Location selected in DL1  only transactions for the Location should be shown in T1 and taken into account when calculating and presenting transaction statistics in T2.

Important: The content of the graph GR1 is not affected when users select different Locations in DL1.

Optional: Highlight the relevant bar in the graph depending on the selection in DL1. 

# Task 5: Present your results in tabular form

Present your results as appropriate in T1 and T2.  

# Task 6: Comment code appropriately

Here we want you to comment your code in an appropriate way, including all functions that you have created. Your comments should describe what is happening at each stage of your program. Furthermore, your comments should describe each function and provide information about the functionality,  arguments, and return values.  

# (Bonus) Task 7: More graphs, more queries 

Add two exclusive radio buttons  one for Transaction Location (RDL) and one for Transaction Type (RDT). When users select RDL, DL1 should be populated with all possible Locations and GR1 should show a different bar for each Location whose height is proportional to the total expenses for each Location, as in Task 3. Furthermore, T1 should be populated with all transactions for the particular Location for all Transaction Types and T2 should contain statistics for these specific transactions as in Task 4 and Task 5.  

When users select Type in RD1, DL1 should be populated with all possible Transaction Types and GR1 should show a different bar for each Transaction Type, whose height will be proportional to the total expenses for each Transaction Type. Furthermore, T1 should be populated with all transactions for the particular Transaction Type for all Transaction Locations and T2 should present statistics for the transactions shown in T1 only.  
