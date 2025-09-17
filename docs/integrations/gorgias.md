---
description: AI agents and copilot to streamline support
---

# Gorgias

<figure><img src="../.gitbook/assets/Gorgias Integration Asset - Revised.png" alt=""><figcaption></figcaption></figure>

eesel AI instantly plugs into your Gorgias, learns from your past tickets, macros, help center and more, and seamlessly joins in like a new teammate.

***

## Training your AI with Gorgias

{% tabs %}
{% tab title="Help Center" %}
### Help Center

For **public help centers**:

1. Choose the bot, or create a new bot, to connect with your help center.&#x20;
2. Click the integrations menu on the sidebar.&#x20;
3. Click Gorgias.
4. Click "Setup integration".
5. Enter you help center URL and click "Start crawling"

The bot will then crawl your help center and start adding links to your bot to use as knowledge within minutes.&#x20;
{% endtab %}

{% tab title="Macros" %}
### Macros

When you connect your Gorgias domain to your eesel AI bot, it will automatically index your macros and add them to your AI bot.

1. Go to your eesel dashboard and unfurl the Gorgias integration on the left sidebar
2. Click Sources
3. Click Macros&#x20;
4. Set them live or as drafts to enable or disable them.
5. Click re-sync to update them after any changes in Gorgias.
{% endtab %}

{% tab title="Past Tickets" %}
### Past Tickets

Training on past tickets requires you to connect your Gorgias domain to the bot you want to train. Once that's done, click on your Gorgias integration on the left sidebar > click 'Tickets'.

We recommend filtering your tickets in your view ID in order to get the best quality results.&#x20;

### Step 1: Create a View in Gorgias <a href="#h_3a290802ea" id="h_3a290802ea"></a>

This view should filter down to the tickets you want the AI to learn from. You can use any combination of:

* Tags
* Statuses (e.g. Closed tickets)
* Channels (e.g. Email, Chat)
* Assignees or teams

Tip: You can name the view to something like "eesel Training Set" so it’s easy to find later.

### Step 2: Get Your View ID from Gorgias <a href="#h_939227d8d1" id="h_939227d8d1"></a>

1. Open Gorgias and go to the View you just created.
2.  Look at your browser’s URL, it should look like this:

    ```
    https://app.gorgias.com/tickets-view/123456
    ```
3. Copy the number at the end, that’s your View ID.

### Step 3: Add Your View ID in eesel <a href="#h_976bf38615" id="h_976bf38615"></a>

Paste the View ID into the field in eesel on the Gorgias -> Tickets page where prompted.

Now eesel will start learning from the tickets in that Gorgias view 🎉
{% endtab %}

{% tab title="Restricted Help Center" %}
### **Restricted Help Center**

1. Install our browser extension
2. Open up the tabs you want to train the AI with
3. Click 'Add sources' > 'Add all tabs in browser'.&#x20;

**On a paid plan**, reach out to us through support and we can automatically crawl and update your restricted help center.
{% endtab %}
{% endtabs %}

***

## Create a Gorgias AI Agent

<figure><img src="../.gitbook/assets/Gorgias AI Agent.png" alt=""><figcaption></figcaption></figure>

eesel can automate your frontline support as an AI agent inside Gorgias. You can have it leave internal notes, automatically reply, and triage tickets.

Once your AI has been trained and customized, it's time to link your Gorgias domain to your AI bot.

To set up eesel as an AI agent inside Gorgias, see our [AI Agent guide](../products/ai-agent.md).



***

## Create a Gorgias AI Copilot

<figure><img src="../.gitbook/assets/Gorgias copilot.png" alt=""><figcaption></figcaption></figure>

Check out our [setup guide](../products/ai-copilot.md) for using AI Copilot in your Gorgias.

eesel AI can act as an AI copilot for your Gorgias by using our [browser extension](https://chromewebstore.google.com/detail/eesel-ai-chatgpt-sidebar/ejhkkbilnpifailgngpkgmiofhioacjd?hl=en).&#x20;

The AI can automatically pick up on the content of a ticket, and generate a response based on the knowledge it has access to.

You can use the browser extension to select the bot you want to use for its answer, and then draft a response and chat with the bot to edit before you paste is as a reply.

***

## Gorgias Actions

Once you've trained the bot and integrated it with your Gorgias, it's important to customize it and add actions so that you can get the most out of your AI and automate manual tasks.

The following are Gorgias specific actions. You can use them in combination with other actions on different platforms as well.

<details>

<summary>Tag conversation</summary>

`gorgias_tag_ticket`

* **Purpose:** Applies tags to a ticket in the Gorgias helpdesk system.
* **Key Params:** `tags: List[str]`
* **When/How to Use:** Use this for categorizing Gorgias tickets based on conversation topics or resolution types. You must provide the tags as a list of strings. The ticket ID for the current conversation is automatically available.
*   **Example Prompt Instruction:**

    > Upon successfully resolving a user's issue related to shipping, call gorgias\_tag\_ticket with the parameter tags=\['shipping', 'resolved-by-ai']. If the user was asking about a specific product, also include a product tag, e.g., tags=\['shipping', 'resolved-by-ai', 'product-X'].

</details>

<details>

<summary>Create ticket</summary>

`gorgias_create_ticket`

* **Purpose:** Creates a new ticket in Gorgias.
* **Key Params:** `subject: str, description: str, email: str, to: str`, optional `priority: str`, optional `status: str`, optional `custom_fields: dict`, optional `channel: str`, optional `via: str`, optional `from_agent: bool`
* **When/How to Use:** Use this when a user's request requires creating a brand new ticket in Gorgias, possibly for a new inquiry identified in a chat or social media interaction that needs formal tracking. You must gather the `subject`, `description`, and `email` of the requester, and specify the `to` email address of the Gorgias mailbox where the ticket should be created. Other parameters like priority or custom fields can be set based on context.
*   **Example Prompt Instruction:**

    > If a user submits feedback via a channel that doesn't automatically create a ticket (like an in-app message you handle conversationally), and the feedback needs formal tracking, offer to create a ticket. If accepted, collect the feedback subject, detailed description, and user's email. Call gorgias\_create\_ticket with the collected info, setting to='support@yourcompany.gorgias.com'. You can also set priority='low' for general feedback.

</details>

<details>

<summary>Leave internal note</summary>

`gorgias_leave_internal_note`

* **Purpose:** Leaves an internal note on the ticket.
* **Key Params:** `note: str`
* **When/How to Use:** Use this action to leave internal notes on conversations in Gorgias. Describe what you want the internal note to be - this could be a draft reply for your agents to pick up, a translation of the user message and so on.
*   **Example Prompt Instruction:**

    > If you escalate a conversation to a human agent, or if you need to summarize the AI's actions for the next agent, call gorgias\_leave\_internal\_note. The note parameter should contain the summary. For urgent escalations that need specific attention, you can also include notify\_emails=\['agent1@example.com', 'manager@example.com'] to alert specific team members.

</details>

<details>

<summary>Assign ticket (escalation)</summary>

`gorgias_assign_ticket`

* **Purpose:** Assigns a ticket to a specific user in the Gorgias helpdesk system.
* **Key Params:** `assignee_id: int`
* **When/How to Use:** Use this to route the current Gorgias ticket to a specific agent or team member identified by their user ID. The ticket ID is automatically available.
*   **Example Prompt Instruction:**

    > If the user's query requires a human agent for a complex return request, inform them you are escalating to the returns specialist and call gorgias\_assign\_ticket. Set the assignee\_id parameter to the integer ID of the returns specialist, e.g., assignee\_id=67890.

</details>
