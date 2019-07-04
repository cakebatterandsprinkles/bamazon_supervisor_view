## Bamazon: Supervisor View

:curly_loop: This node app uses a MySQL Database. Running this application will list a set of menu options for the supervisor:

   * View Product Sales by Department
   
   * Create New Department

:curly_loop: When a supervisor selects `View Product Sales by Department`, the app displays a summarized table in their terminal/bash window. 

:curly_loop: The `total_profit` column is calculated on the fly using the difference between `over_head_costs` and `product_sales`. `total_profit` is not be stored in any database.

![Here is the demo](assets/supervisor.gif)