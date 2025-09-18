---
icon: chart-pie-simple
---

# Reporting and Analytics

## Reporting tab

Reporting is an essential aspect to iterating and improving upon your AI and your support. eesel is able to provide a range of reports to help you evaluate your AIs performance.

This includes:

1. Past replies: review and export past replies from inside your dashboard for each bot.
2. Gaps in training: identify the percentage of replies where the AI did not have all the necessary information.
3. Deflection rate: observe the percentage of replies that did not need any human escalation.
4. Amount saved: calculate how much money and time has been saved through the use of eesel AI. (Use the three dots in the corner to adjust the calculations).



## Reviewing sources used

To view the sources that your AI is viewing for each individual reply, follow these steps:

1. Login to your account and navigate to the dashboard for the bot you’d like to review.
2. Select the ‘History’ button on the sidebar.
3. Navigate to the message and reply that you’d like to review.
4. In the message column, hover over the icons on the right-hand side and select the ‘View Sources’ button.



## Exporting replies for deeper analysis

By default, you're able to export 7 days of chat history from your bots. To do so:

1.  Head to the bot you'd like to export reply history from\
    ​



    <figure><img src="https://downloads.intercomcdn.com/i/o/lnz0cfjq/1546159731/25d32011775a4c47748b5a8c4f8a/image.png?expires=1753336800&#x26;signature=be1ab14f155cc632473cf95dacd11a9763c5b60ed2c409ca99398f09e09eb1f2&#x26;req=dSUjEMh7lIZcWPMW1HO4zUpniOWaci8aSD9nWIVSxbI0Dc9PDBD6WczWJ8fR%0Aj64I%0A" alt="" width="563"><figcaption></figcaption></figure>
2.  Click History in the left sidebar



    <figure><img src="https://downloads.intercomcdn.com/i/o/lnz0cfjq/1546160196/4b76bfa770fa646a4dbefba55a07/image.png?expires=1753336800&#x26;signature=b50321b7421f40ad7843bba09ab01654666cb2c6ab983ce6ce6f9b3f36e0b414&#x26;req=dSUjEMh4nYBWX%2FMW1HO4zVFzxd6OxTJB%2BGM%2BdHIQzFz18%2BVaPdfPEPcZ2ujJ%0AF6IZ%0A" alt="" width="563"><figcaption></figcaption></figure>

3\. Click "Export chats" in the top right. It will automatically download a spreadsheet with your chat data from the past 7 days.

### Exporting chat replies greater than 7 days <a href="#h_ed2cf84103" id="h_ed2cf84103"></a>

To export more than 7 days worth of chat history, use the following URL:

`https://dashboard.eesel.ai/api/proxy/namespaces/<namespace-id>/inbox/sessions/export?start_date=YYYY-MM-DD&end_date=YYYY-MM-DD`\
​\
Simply replace the namespace ID with the ID of the bot you're exporting from, and the dates of the time range you're looking to export. (**Note:** Remove the < and > from the URL once you've added in the namespace ID).

To find the namespace ID of a bot, go to your dashboard for that bot and grab the number and letter sequence that appears after the /v2/ part of the URL:

<figure><img src="https://downloads.intercomcdn.com/i/o/lnz0cfjq/1546164048/3f96ba60fe6c8ff05bd609cb1980/image.png?expires=1753336800&#x26;signature=45034ef587c176c708d59f59cfecaa402257480a4cdfd80e3c92817fdaae173e&#x26;req=dSUjEMh4mYFbUfMW1HO4zSIWB9HRqC6ffDInIiEe6UJgOUp0cn0zZiG30kf7%0AflHx7ZYf0mcAreHoYEQ%3D%0A" alt="" width="563"><figcaption></figcaption></figure>

There's a max date range of 30 days.



### Analysing and filtering past replies

The exported replies will contain many pieces of data that you can filter for in order to learn more about your AI's performance.&#x20;

Each reply will be an individual entry but you can filter for things like:&#x20;

* Unique session IDs
* Location of the chat (session type)
* Feedback given in the dashboard
* Contents of the ticket (like topics, keywords etc.)

We generally recommend separate bots for things like a chat bubble vs an AI agent in your helpdesk in order to make it easier to filter your responses.&#x20;

You can also use the native reporting analytics on your helpdesk to help find out more about your AI's actions and performance. For example, adding a specific tag to each ticket that gets escalated, or for particular topics.

