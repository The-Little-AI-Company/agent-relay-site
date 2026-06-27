---
layout: ../../layouts/MethodDoc.astro
title: Prompt Craft
description: A step-by-step way to climb from a prompt to a handoff-ready task record.
---

# Prompt Craft: The Climb To Work

A prompt asks for an answer. Work mode gives a job that survives the handoff. This is the climb between them — and how to make it, one rung at a time, with your own work.

Most advice treats prompting as a single skill you get better at. It is not. It is a climb. Each rung adds the one thing the rung below could not survive without. At each rung there is a question you ask yourself, and the answer is what you add before you climb higher.

We use one example the whole way up: a follow-up email after a client call.

## Rung 1 · Ask

Get an answer inside one chat.

```text
Write a follow-up email to the client.
```

> **Do this:** Write the plainest version of what you want. If you will read the result and use it yourself, stop here — you do not need to climb.

This fails the moment the email has to be grounded in something or handed to someone else. The model fills the gaps with guesses.

## Rung 2 · Frame

Attach the source and context, so the answer is grounded in real material instead of invented.

```text
Using the client-call transcript and the decision summary, write a follow-up email to the client.
```

> **Do this:** Ask yourself — *what did the model need to read to get this right?* Attach or paste that source. Name the decisions already made. If you would have to explain background out loud, write it down instead.

Now the email reflects what was actually said. But the model still has full freedom — it may promise things you did not authorize.

## Rung 3 · Bound

Add what the actor may do and where it must stop, so the work is safe to run without you watching.

```text
Using the client-call transcript and the decision summary, draft the follow-up email. Do not overstate the promise we made. Flag anything that needs my judgment. Stop before sending.
```

> **Do this:** Ask yourself — *what could go wrong if no one was watching?* Write three things: what the actor may do, what it must not do, and the exact point where it must stop and hand back.

This is the rung most people skip, and it is the one that makes delegation safe.

## Rung 4 · Hand Off

Add who acts next, what proves the work is done, and a status the next actor can read — so the work can leave the chat entirely.

```text
Outcome: a client-ready follow-up email, not yet sent.
Source: client-call transcript, decision summary.
Allowed: draft the email, flag open questions.
Stop: before sending; before promising anything beyond the decision summary.
Done: draft saved, judgment flags listed, receipt left.
Next actor: Jeff, for review and send.
```

> **Do this:** Ask yourself — *if I disappeared right now, could the next actor finish from this alone?* Fill every line below. A blank line is a question someone will have to ask you later.

This is no longer a prompt. It is a task record. It can move to another agent or another person with nothing spoken.

## Climb Your Own Prompt In Four Passes

Take a real prompt you are about to send. Make four passes over it.

1. **Write it plainly (Ask).** Say what you want in one line. Decide: does this answer stay with me? If yes, send it — you are done.
2. **Ground it (Frame).** List what the model must read to be right. Paste or link each one into the prompt.
3. **Fence it (Bound).** Add the three boundaries: allowed, not allowed, stop point.
4. **Hand it off (Hand off).** Fill the template below. If you can fill every line, the work can leave the chat.

Stop at the pass that matches how far the work has to travel. You are not aiming for rung four every time — you are aiming for the lowest rung the work can survive.

## The Copy-Paste Handoff Template

Keep this near your keyboard. To climb a prompt to the top, fill it in:

```text
Outcome:      (the finished result, in one sentence)
Source:       (everything the actor must read — attached or linked)
Allowed:      (what the actor may do)
Stop:         (the point it must not pass without you)
Done:         (the proof that it is finished)
Next actor:   (the named human or agent who acts next)
```

If a line is blank, that is the gap. Fill it before you hand off, not after someone asks.

## How High To Climb

Climb only as high as the work has to travel.

- The answer stays with you → **Ask** is enough.
- The answer must be correct against real material → climb to **Frame**.
- The work runs without you watching → climb to **Bound**.
- The work leaves the chat for another actor → climb to **Hand off**.

The mistake is not climbing too high. The mistake is sending rung-one work on a rung-four journey, and then becoming the hallway it travels through.

---

Next: [The Relay Loop Audit](../relay-loop-audit/) · [The 30-Minute Relay](../thirty-minute-relay/)
