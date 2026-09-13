---
title: "Position: how exactly AI will make complex decisions for us"
date: 2026-09-12
description: "Optimization is the calculator for complex decisions, and AI will not render it irrelevant."
cover:
  src: ../../images/covers/how-ai-will-make-complex-decisions.png
tags:
  - position
  - LLM
---

There is a claim that I see an increasing number of discussions about the rapidly developing AI technology make in the recent two years: one of the most crucial applications of AI (mostly referring to LLMs) is making complex decisions.
Undoubtedly, different people can have very different interpretations of what constitutes complex decision making.
By some standards, one could claim that LLMs are already making complex decisions for us in certain fields, perhaps more often playing an advisory role, for which it leverages its advantage in searching for and filtering the most relevant information and applying complex reasoning at a scale large enough to cost human analysts much longer time.

One of the most important families of decision making problems are those that can be modeled as *optimization problems*:
$$
\begin{equation*}
\begin{split}
\min_{x \in X} \quad & c(x) \\
\textrm{s.t.} \quad & h(x) = 0 \\
& g(x) \leq 0
\end{split}
\end{equation*}
$$

People have used optimization to make decisions at least since World War II: the world around us have become more complicated to warrant sophisticated tools.
Indeed, in reality, many decisions made by individuals and organizations are subject to certain constraints, and some feasible decisions are more favorable than others in certain aspects.
The representation power is significant, but more importantly, it allows humans to solve problems that are sometimes easy to describe and understand, yet so intricate in their structures that humans have no clue how to approach without using optimization tools.
Optimization has been the most straightforward and effective, if not the only, way to model certain decision making problems, problems that are prevalent and important, in domains such as energy, transportation, logistics, finance, healthcare, aviation, manufacturing, and many other that involve the operation of complex systems.

Consequently, to help humans make decisions in certain tasks, AI would have to, at some point in the pipeline, model an optimization problem and solve it.
There has been growing research in making LLMs understand decision requirements (which could well be represented by natural language) and [help model the optimization problems](https://www.gurobi.com/company/newsroom/gurobi-launches-intelligence-hub-to-deliver-ai-guided-workflows-across-the-optimization-lifecycle); optimization tools are then invoked to actually solve the problems and produce the optimal decisions.

Will LLMs produce complex decisions for such problems by their own capabilities, without relying on optimization?
As of writing, there has been some study on the capability of LLMs to solve problems that can be modeled with optimization; they directly output the decisions without resorting to external tools.
Compared to the real-world manifestations of these problems, the versions that LLMs have been able to solve are highly simplified and tiny in scale, and the generalization guarantee has also been lacking.
I doubt that, given their underlying mechanism, LLMs will be able to reliably make the types of decisions that are otherwise formulated as hard optimization problems in the foreseeable future.

Therefore, I believe that the LLMs that have proven so skilled and even superhuman at coding and making math breakthroughs will in fact not make complex decisions for us in many cases.
Instead, they will only help us formalize and model the problem, and use the same specialized tools that we have always used to solve it.
Although I am mainly interested in optimization problems, a similar conclusion probably applies to certain other decision problems best solved with computational methods such as simulation.

However, this is not to say machine learning methods in general cannot be applied to architect optimization tools.
In fact, much of my research and that at our [NSF AI4OPT lab](https://www.ai4opt.org) revolves around the idea of solving optimization problems using AI.
Likewise, scientific machine learning (SciML) would be an example of AI methods applied to simulation.

I sometimes find an analogy in a much simpler type of problems.
Basic arithmetic problems have been a challenge to LLMs due to their underlying mechanism, despite their success in complex reasoning.
The solution to this specific limitation is simply giving them a calculator.
Optimization can be thought of as the calculator for complex decision making to some extent, and perhaps for the same reason LLMs did not replace calculators, they will also not render optimization irrelevant.
Granted, optimization is much harder than basic arithmetics in general, and that is one of the reasons that we study it.