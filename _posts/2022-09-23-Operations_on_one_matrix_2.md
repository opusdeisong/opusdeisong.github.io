---
title: Operations on one matrix - part 2
categories: [2022-2, Linear_Algebra]
tags: [Linear_Algebra]
---

## Operations on one matrix

>### Simple row operations
>
>> #### Switching two rows
>>
>>  You can switch any two rows in a matrix without changing the value of the matrix. 
>>
>> <img src = "https://user-images.githubusercontent.com/105193807/191972815-9e082f68-4c38-4fb7-bdd1-e2fae8d604bd.png">
>
>> #### Multiplying a row by a constant
>>
>>  You can multiply any row in a matrix by any non-zero constant without changing the value of the matrix. We often call this value a <b>scalar</b> because it "scales" the values in the row. 
>>
>> <img src = "https://user-images.githubusercontent.com/105193807/191973449-0eb3b567-c5c7-4640-9e8c-7865c0beff09.png">
>
>> #### Adding a row to another row
>>
>> It's also acceptable to add one row to another. Be careful that this doesn't consolidate two rows into one. Instead, we replace a row with the sum of itself and another row. 
>>
>> <img src ="https://user-images.githubusercontent.com/105193807/191974533-06d4fe78-554c-44a1-8230-654b6edfeea2.png">
>
>---
>
>### Pivot entries and row-echelon forms
>
> Now that we know how to use row operations to manipulate matrices, we can use them to simplify a matrix in order to solve the system of linear equations the matrix represents. 
>
>> #### Pivot entries
>>
>>  A <b>pivot entry</b>(or leading entry, or pivot) is the first non-zero entry in each row. Any column that houses a pivot is called <b>pivot column</b>. Look at the picture below. All of the pivots are circled in blue.
>>
>> <img src = "https://user-images.githubusercontent.com/105193807/191976270-c73edf73-e5fb-43d6-99e1-e4f914c9167e.png">
>
>> #### Row-echelon form
>>
>>  A matrix is in **row-echelon form (ref)** if
>>
>> 1. All the pivot entries are equal to 1.
>> 2. Any rows that consist of only 0s are at the bottom of the matrix.
>> 3. The pivot in each row sits in a column to the right of the column that houses the pivot in the row above it. In other words, the pivot entries sit in a staircase pattern, where they stair-step down from the upper left corner to the lower right corner of the matrix.
>>
>> If a matrix is in ref form, and if, in each pivot column, the pivot entry is the only non-zero entry, then the matrix is in **reduced row-echelon form(rref)**. Below is an example of putting the matrix into rref form using row operations.
>>
>> <Img src ="https://user-images.githubusercontent.com/105193807/191979619-0a1f6387-9c40-444e-8e30-686ac9197a49.png">
>
>---
>
>### Gauss-Jordan elimination
>
> Finally, we’re at a point where we can start to solve a system using a matrix. To solve a system, our goal will be to use the simple row operations we learned earlier to transform the matrix into row-echelon form, or better yet, reduced row-echelon form.
>
>1. Optional : Pull out any scalars from each row in the matrix.
>2. If the first entry in the first row is 0, swap it with another row that has a non-zero entry in its first column. Ohterwise, move to step 3.
>3. Multiply through the first row by a scalar to make the leading entry equal to 1.
>4. Add scaled multiples of the first row to every other row in the matrix until every entry in the first column, other than the leading 1 in the first row, is a 0.
>5. Go back step 2 and repeat the process until the matrix is in reduced row-echelon form
>
>Below is an example of solving the system using Gauss-Jordan elimination.
>
><img src="https://user-images.githubusercontent.com/105193807/191986364-d08c7689-9c18-4ef4-9e28-82eaed95ca5b.png">
>
>---
>
>### Numbers of solutions to the linear system
>
>We already know how to solve linear systems using Gaussian elimination to put a matrix into reduced row-echelon form. But up to now, we’ve only looked at systems with exactly one solution. In fact, systems can have: **one solution**, or **no solutions**, or **infinitely many solutions**.
>
>> #### The unique solution
>>
>> <Img src = "https://user-images.githubusercontent.com/105193807/191989309-999659ec-2092-4d82-94d4-26c7810c1e99.png">
>>
>> Infinitely many or no solutions
>
>> <Img src ="https://user-images.githubusercontent.com/105193807/191989075-39a8ce6a-c9ff-4232-87ab-1dfc5d0cb57b.png">
>
>> #### Pivot entries and free entries
>>
>>  You already know that the 1’s in the first and second row of matrix are called the pivot entries in the matrix. Any other non-zero values on the left side of the matrix, in this case the −3 in the second row, are called free entries.
>>
>> <img src ="https://user-images.githubusercontent.com/105193807/191989994-299114d0-3762-417d-8018-29a1de6c381b.png">
