---
description: Chat with the bot in Slack and train it on conversations
---

# Slack

<figure><img src="../.gitbook/assets/AI_Internal_Chat_Asset 1.png" alt=""><figcaption></figcaption></figure>

Slack is one of our favorite apps that you can integrate with. Use it to streamline your internal team chat, so your team has access to internal documentation (or any other integrations you want!) for instant replies and assistance. Great for onboarding.

## **How to set up the Slack integration:**

1. Head to your **eesel dashboard**. Choose the bot you want to connect to Slack.
2. Click the **Integrations tab** in the side menu.
3. In the search bar, type **"Slack"** and select it from the list.
4. Hit the **Connect Slack** button.
5. You’ll be prompted to sign into your Slack workspace. Use your **Slack URL** to do this. (You can find it by clicking your workspace name in Slack, then selecting Edit workspace details.)
6. When prompted, **grant eesel permission** to access your Slack workspace.
7. Head back to the **eesel dashboard > Slack integration** on sidebar > **Channels** and make sure the Channel ID has been added.
8. &#x20;You’re all set to start chatting with your bot directly in Slack.



## **Setting up multiple bots for different channels**

In some cases, you may want a Sales bot for your Sales channel, and a Support bot for the Support channel, etc.

To do so, you can:

1. **Create a bot** for each of the channels you want a unique bot for
2. **Connect** each of them to your Slack workspace as explained above
3. Click **Slack** on the integration sidebar > **Channels** and input the ID of the channel you want that specific bot to be active in.
4. Repeat for each bot.

**Note:** The bots will only have access to the knowledge they've been provided, and the actions and prompt they have. This is useful if you want everything completely separate, but you're able to also have them share knowledge or route to each other using some of our actions like [#use-knowledge-from-another-bot](../getting-started/prompt-and-actions.md#use-knowledge-from-another-bot "mention") or [#consult-direct-query-to-another-bot](../getting-started/prompt-and-actions.md#consult-direct-query-to-another-bot "mention").



By default, your AI will not learn from conversations. To set this up, please contact support.
