# Random-number-generator
## The Linear Congruential Generator (LCG) algorithm
This fascinating algorithm uses more math than MSM. The LCG uses a linear equation that involves congruence operation for the generation of a random sequence of numbers. “Whoa! What’s all these fancy terms?” I can hear you exclaiming. Let me explain.

Linear means an algebraic equation that has no variables raised to the power greater than one.

Congruential means an equation that uses modulus division operation.

With its jargons, the algorithm might seem sophisticated. But, it’s very simple to understand as it uses very basic algebra and arithmetic operations. It uses this particular equation Xn+1 = (aXn + c) mod m. Alright! Alright! No more math terms. I’ll translate it to programmer readable from. The translated equation is, X = (a * X + c) % m

Where X is the seed. Akin to the MSM the result is used as the seed for the next cycle.

a – is the multiplier

c – is the increment and

m – is the modulus

It has the following conditions

1. m > 0, duh! divide by zero is impossible

2. 0 < a < m

3. 0 ≤ c < m and

4. 0 ≤ X < m

Since this is a simple equation, solving this is a piece of cake for computers. In the case of the MSM, data conversion from number to string and back to number is required, which are heavy on the CPU. For this reason, LCG is the oldest and best-known random number generator algorithm [2]. And hence takes 2nd in the list.

After all, both the increment and the seed can take the value zero care should be taken that both do not take zero or else it just spits out a sequence of zeroes.

With the right combination of inputs, we could generate a very long sequence. Longer than the MSM before it starts repeating itself. In my example I used the values a = 1664525, m = 232 and c = 1013904223 as used in Numerical Recipes.
