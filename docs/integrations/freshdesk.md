---
description: AI agents and copilot to streamline support
---

# Freshdesk

eesel AI instantly plugs into your Freshdesk, learns from your past tickets, macros, help center and more, and seamlessly joins in like a new teammate.

<figure><img src="../.gitbook/assets/Freshdesk Integration Asset.png" alt=""><figcaption></figcaption></figure>

***

## Training your AI with Freshdesk

{% tabs %}
{% tab title="Help Center" %}
### Help Center

For **public help centers**:

1. Choose the bot, or create a new bot, to connect with your help center.&#x20;
2. Click the integrations menu on the sidebar.&#x20;
3. Click Freshdesk.
4. Click "Setup integration".
5. Enter you help center URL and click "Start crawling"

The bot will then crawl your help center and start adding links to your bot to use as knowledge within minutes.&#x20;
{% endtab %}

{% tab title="Macros" %}
### Macros

When you connect your Freshdesk domain to your eesel AI bot, it will automatically index your macros and ad them to your AI bot.

1. Go to your eesel dashboard and unfurl the Zendesk integration on the left sidebar
2. Click Sources
3. Click Macros&#x20;
4. Set them live or as drafts to enable or disable them.
5. Click re-sync to update them after any changes in Zendesk.
{% endtab %}

{% tab title="Past Tickets" %}
### Past Tickets

Training on past tickets requires you to connect your Freshdesk domain to the bot you want to train. Once that's done, click on your Freshdesk integration on the left sidebar > click 'Tickets'.

We recommend filtering your tickets using the query in order to get the best quality results.&#x20;

### Step 1: Writing a Ticket Filter Query <a href="#h_6778e3d5d6" id="h_6778e3d5d6"></a>

Use Freshdesk’s query language to fetch only the tickets you care about (e.g. billing tickets, high-priority issues, etc.). The following is a list of fields you can use to filter your tickets:

| Field           | Type    | Description                                                                   |
| --------------- | ------- | ----------------------------------------------------------------------------- |
| `agent_id`      | integer | ID of the agent the ticket is assigned to                                     |
| `group_id`      | integer | ID of the group the ticket is assigned to                                     |
| `priority`      | integer | Priority of the ticket (1–4)                                                  |
| `status`        | integer | Status of the ticket (e.g. Open = 2, Resolved = 4)                            |
| `tag`           | string  | Ticket tag                                                                    |
| `type`          | string  | Issue type (e.g. Question, Incident, Problem)                                 |
| `created_at`    | date    | Ticket creation date (YYYY-MM-DD)                                             |
| `due_by`        | date    | Ticket due date                                                               |
| `fr_due_by`     | date    | First response due date                                                       |
| `updated_at`    | date    | Last updated timestamp                                                        |
| `custom fields` | mixed   | Use `cf_fieldname` or `custom_string` for custom fields like text or checkbox |

#### Example Queries: <a href="#h_a6548896b4" id="h_a6548896b4"></a>

| Description                                           | Query                                                                                      |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Urgent or high-priority tickets                       | `priority:4 OR priority:3`                                                                 |
| Open and pending tickets (second page)                | `status:3 OR status:4` (use `&page=2` if using API directly)                               |
| High-priority open tickets in group ID 11             | `priority:>3 AND group_id:11 AND status:2`                                                 |
| Finance or marketing sector (custom fields)           | `(cf_sector:'finance' OR cf_sector:'marketing') AND cf_locked:true`                        |
| Urgent tickets created on Jan 1, 2017                 | `priority:>3 AND created_at:'2017-01-01'`                                                  |
| Tickets due in first week of Oct 2017                 | `(type:'Question' OR type:'Problem') AND (due_by:>'2017-10-01' AND due_by:<'2017-10-07')`  |
| Problem-type tickets tagged with “marketing”          | `type:'Problem' AND tag:'marketing'`                                                       |
| Tickets without any tag                               | `tag:null`                                                                                 |
| Urgent tickets with no specified type                 | `type:null AND priority:4`                                                                 |
| Urgent tickets assigned to agents 2 or 3              | `(agent_id:2 OR agent_id:3) AND priority:4`                                                |
| Unassigned tickets                                    | `agent_id:null`                                                                            |
| All unresolved tickets                                | `status:2 OR status:3 OR status:6 OR status:7`                                             |
| Tickets using a keyword in a single-line custom field | `custom_string:refund`                                                                     |
| Multiple keywords (AND / OR)                          | `custom_string:keyword1 AND custom_string:keyword2` / `custom_string:keyword1 OR keyword2` |

### Step 2: Preview Sample Tickets <a href="#h_d783fe3193" id="h_d783fe3193"></a>

1. After entering your query in Eesel’s ticket filter input, click the Preview button.
2. Eesel will fetch a sample of tickets matching your query.
3. Review the ticket list output carefully to confirm the query selects the desired tickets (e.g., only billing-related tickets).
4. If the results don’t match your expectations or if you see an error, adjust your query syntax and preview again.

### Step 3: Process Tickets for Training <a href="#h_db28251caa" id="h_db28251caa"></a>

* Click the Process Tickets button to start training your AI agent with the filtered tickets.
* Once started, you’ll receive an email confirmation when the process completes.
* Don’t worry—we’ll notify you if anything goes wrong during processing.
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

## Create a Freshdesk AI Agent

<figure><img src="../.gitbook/assets/Freshdesk Agent Hero.png" alt=""><figcaption></figcaption></figure>

eesel can automate your frontline support as an AI agent inside Freshdesk. You can have it leave internal notes, automatically reply, and triage tickets.

Once your AI has been trained and customized, it's time to link your Freshdesk domain to your AI bot.

To set up eesel as an AI agent inside Freshdesk, see our [AI Agent guide](../products/ai-agent.md).



***

## Create a Freshdesk AI Copilot

<figure><img src="../.gitbook/assets/Freshdesk Copilot Hero.png" alt=""><figcaption></figcaption></figure>

Check out our [setup guide](../products/ai-copilot.md) for using AI Copilot in your Freshdesk.

eesel AI can act as an AI copilot for your Freshdesk by using our [browser extension](https://chromewebstore.google.com/detail/eesel-ai-chatgpt-sidebar/ejhkkbilnpifailgngpkgmiofhioacjd?hl=en).&#x20;

The AI can automatically pick up on the content of a ticket, and generate a response based on the knowledge it has access to.

You can use the browser extension to select the bot you want to use for its answer, and then draft a response and chat with the bot to edit before you paste is as a reply.=

***

## Freshdesk Actions

Once you've trained the bot and integrated it with your Freshdesk, it's important to customize it and add actions so that you can get the most out of your AI and automate manual tasks.

The following are Freshdesk specific actions. You can use them in combination with other actions on different platforms as well.

<details>

<summary>Create ticket</summary>

`freshdesk_create_ticket`

* **Purpose:** Creates a new Freshdesk ticket. (Note: This definition appears to be the same as the previous one).
* **Key Params:** `subject, description, email, priority, status`
* **When/How to Use:** Use when a user reports a bug, requests a new feature, or has a complex issue that requires tracking as a formal ticket rather than being resolved immediately in the current conversation. You will need to instruct the AI to gather the required parameters from the user. The current conversation ID is automatically available for context if needed, but the tool creates a _new_ ticket.
*   **Example Prompt Instruction:**

    > If the user is reporting a potential bug or requesting a new feature, you must offer to create a support ticket for them in our Freshdesk system. If they accept, collect their name, email address, a brief summary of the issue (for the subject), and a detailed description of the problem or request. Once you have this information, call freshdesk\_create\_ticket with the gathered subject, description, and email. Set priority to 'Low' and status to 'Open' by default, unless the user indicates high urgency.

</details>

<details>

<summary>Tag ticket</summary>

`freshdesk_tag_ticket`

* **Purpose:** Add tags to a Freshdesk ticket.
* **Key Params:** `tags: List[str]`
* **When/How to Use:** Similar to other tagging Actions for categorization and workflow. Note this tool takes a `List[str]` for the `tags` parameter, meaning you should provide tags in a list format like `['tag1', 'tag2']`. The ticket ID for the current conversation (if applicable) is automatically available. If tagging a ticket just created by `freshdesk_create_ticket`, the ID might need to be handled via workflow logic or be available from the create tool's response.
*   **Example Prompt Instruction:**

    > After successfully creating a Freshdesk ticket using freshdesk\_create\_ticket, you must also call freshdesk\_tag\_ticket using the ticket ID of the newly created ticket (ensure this ID is available after the create call). Add the tag 'created\_by\_ai' and any other relevant tags based on the user's request, such as 'bug' or 'feature\_request'. The tags parameter must be a list of strings, for example: tags=\['created\_by\_ai', 'bug'].

</details>

<details>

<summary>Close ticket</summary>

`freshdesk_close_ticket`

* **Purpose:** Close a Freshdesk ticket.
* **Key Params:** `close: true`
* **When/How to Use:** Use this tool when the user explicitly indicates their issue is resolved, they are satisfied with the assistance, or the conversation reaches a natural conclusion where closure is appropriate according to your support process. The ticket ID for the current conversation is automatically available to the tool.
*   **Example Prompt Instruction:**

    > If the user explicitly states their problem is solved, they are satisfied with the outcome, or the conversation has concluded and no further action is required, you must confirm this understanding with the user. If they agree, call the Freshdesk\_close\_ticket tool to mark the ticket as closed.

</details>

<details>

<summary>Leave internal note</summary>

`freshdesk_leave_internal_note`

* **Purpose:** Leaves an internal note on the ticket.
* **Key Params:** `note: str`, optional `notify_emails: List[str]`
* **When/How to Use:** Use this to add private notes to the current Freshdesk ticket for internal team members. You can optionally specify a list of agent emails to notify about the note. The ticket ID is automatically available.
*   **Example Prompt Instruction:**

    > If you escalate a conversation to a human agent, or if you need to summarize the AI's actions for the next agent, call freshdesk\_leave\_internal\_note. The note parameter should contain the summary. For urgent escalations that need specific attention, you can also include notify\_emails=\['agent1@example.com', 'manager@example.com'] to alert specific team members.

</details>

<details>

<summary>Assign ticket (escalation)</summary>

`freshdesk_assign_ticket`

* **Purpose:** Assigns a Freshdesk ticket to a specific agent.
* **Key Params:** `assignee_id: int`
* **When/How to Use:** Use this tool to route the current ticket to a specific agent based on their ID. The ticket ID is automatically available. Define rules for which agent ID to use based on the conversation topic or user request.
*   **Example Prompt Instruction:**

    > If the user's query requires the attention of an agent specializing in integrations, inform the user you are assigning the ticket to the integrations specialist and call freshdesk\_assign\_ticket. Set the assignee\_id parameter to the integer ID of the integrations agent, e.g., assignee\_id=12345.

</details>

<details>

<summary>Update ticket fields</summary>



* `freshdesk_update_ticket`
  * **Purpose:** Updates a Freshdesk ticket with the provided payload.
  * **Key Params:** `payload: str` (JSON string)
  * **When/How to Use:** Use this for modifying various ticket fields (status, priority, custom fields, etc.). The ticket ID for the current conversation is automatically available. You must instruct the AI to construct the JSON payload based on the desired updates indicated by the user or the workflow logic.
  *   **Example Prompt Instruction:**

      > If the user indicates their issue is resolved and you have confirmed it, or if the workflow requires setting the ticket status to 'solved', you must call freshdesk\_update\_ticket. Set the payload parameter to a JSON string that updates the status, e.g., payload='{"status": "solved"}'.
      >
      > If the user reports a high-priority issue you are escalating, you might call `freshdesk_update_ticket` with `payload='{"priority": "high"}'`.
      >
      > To update a custom field (ID 123), call `freshdesk_update_ticket` with `payload='{"custom_fields": [{"id": 123, "value": "new value"}]}'`.

</details>

