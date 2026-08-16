---
title: Welcome to my blog
date: 2026-08-15
description: Sample post.
cover:
  src: ../../images/covers/sample-cover.png
  alt: A sample blog cover
tags:
  - welcome
  - astro
---

Sample post.

## Math

Inline math like $e^{i\pi} + 1 = 0$ and display math:

$$
\int_0^\infty \frac{x^{s-1}}{e^x - 1}\,dx = \Gamma(s)\,\zeta(s)
$$

## Code

```python
def fib(n: int) -> int:
    return n if n < 2 else fib(n - 1) + fib(n - 2)
```

```julia
function fib(n)
    n < 2 ? n : fib(n - 1) + fib(n - 2)
end
```