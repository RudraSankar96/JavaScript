Let us compare the while and do…while loop.

            do…while	                                  while
It is an exit-controlled loop	                It is an entry-controlled loop.

The number of iterations will be at  
least one irrespective of the condition	        The number of iterations depends upon the condition specified

The block code is controlled at the end       	The block of code is controlled at starting

Note: When we are writing conditions for the loop we should always add a code that terminates the code execution otherwise the loop will always be true and the browser will crash.

Q2. What is a do…while loop in JavaScript?
    A do…while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. Unlike a regular while loop, a do…while loop will execute the code block once before checking the condition.


Q3. What is the basic syntax of a do…while loop?
    The basic syntax of a do…while loop includes the do keyword followed by a code block in curly braces and the while keyword followed by a condition in parentheses.


How does the do…while loop work?
    The do…while loop first executes the code block once, and then evaluates the condition. If the condition is true, the loop repeats, executing the code block again. This process continues until the condition evaluates to false.


What is the difference between while and do…while loops?
    while loop: Checks the condition before executing the code block. If the condition is false initially, the code block may never execute.
    do…while loop: Executes the code block once before checking the condition. This guarantees that the code block will execute at least once, even if the condition is false initially.

How do you break out of a do…while loop early?
    You can use the break statement to exit a do…while loop before it completes all its iterations. This is useful if you want to stop the loop based on a condition inside the loop body.


How do you skip an iteration in a do…while loop?
    You can use the continue statement to skip the current iteration and proceed to the next iteration of the loop. This is useful if you want to skip certain iterations based on a condition.