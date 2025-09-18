---
description: Automatically triage and route your tickets
icon: arrow-progress
---

# AI Triage

<figure><img src="../.gitbook/assets/AI_Triage_Asset_3 1.png" alt=""><figcaption></figcaption></figure>

eesel AI plugs into your Zendesk, Freshdesk, and other helpdesk tools, and based on your workflows route, tag, edit and close tickets. Get a perfectly organised help desk, all automatically.

Our AI triaging operates using the bot's prompt and actions. Once you've added your AI bot to your helpdesk, it can:&#x20;

* Tag
* Close
* Update ticket fields
* Assign to agents or teams

And more!&#x20;

## To set up AI triage:&#x20;

1. **Create an AI bot** in your eesel dashboard
2. **Train it** on some knowledge so that it has context of your company, and its role.
3. **Connect your helpdesk domain** via Integrations in the sidebar.
4. Head to the **Customize** tab.
5. Enable the [actions](../getting-started/prompt-and-actions.md) you want to use, and update the prompt to explain to the bot how and when to use those actions.
   1. For example: add in the "Tag" action, and add to the prompt: "For every new conversation, use 'zendesk\_tag\_ticket' action, using the relevant tag from the following options: "Billing", "Bug", "Support".
   2. You can find integration specific actions on the [integration page](broken-reference) of your helpdesk. You can also find non-integration specific actions (like 'do not reply') [here](../getting-started/prompt-and-actions.md).
6. Head to the **AI Agent** tab of the helpdesk integration on the left sidebar
7. Click "No reply", and click "Live" to enable it to act live on incoming tickets, without leaving notes or public replies.
   1. AI Triage can operate at the same time as AI Agent or AI Copilot, so you can select "Leave public replies" or "Leave internal notes" and have AI Triage still operate.

