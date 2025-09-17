# Zendesk Messaging Widget Integration

## Set up chat handover <a href="#h_72d0fe1340" id="h_72d0fe1340"></a>

At the end of the chat, you need to enable the 'chat handover' action in order to pull the conversation through to your Zendesk dashboard. This is necessary for keeping a history of the chat there, as well as using any collected information during the chat to fill out ticket fields.

1\. To enable the chat handover, head to your Customize tab. Then, click "create new action" to bring up the actions window.

<figure><img src="https://downloads.intercomcdn.com/i/o/lnz0cfjq/1558333675/be2a9534dd995489cd166951a7e9/image.png?expires=1753330500&#x26;signature=a8f8ba68c36cab33d4a8cea35e9fc17f630a3c8f9b8e61f79540a72f6df69dad&#x26;req=dSUiHsp9nodYXPMW1HO4zeY4FHruAd6n98JQkOw9iWIZ8p0%2FN1muXmqSlhss%0Ajly0yPU6tKmKi%2FTxTig%3D%0A" alt="" width="563"><figcaption></figcaption></figure>

2\. Select "Chat handover" and click "enable action".

<figure><img src="https://downloads.intercomcdn.com/i/o/lnz0cfjq/1558334240/4086c87c1c1446835b909d508b3f/image.png?expires=1753330500&#x26;signature=825b5d46cf254c0e0134a81b31309a8d965a2790d150b28bd759dd008b318c25&#x26;req=dSUiHsp9mYNbWfMW1HO4zTQmF6bczJJokoSJW71rMqU6X2OvNAGhMhm8L%2FAP%0AbcFO7MkGOlR1V%2FfNvfs%3D%0A" alt="" width="563"><figcaption></figcaption></figure>

3\. Add in some text to the prompt mentioning when you want the handover action to take place. For example:

<figure><img src="https://downloads.intercomcdn.com/i/o/lnz0cfjq/1558335451/a75924db6bd543bb0878a5dea28c/image.png?expires=1753330500&#x26;signature=aa1d09f4024c3b3d4c8e94f3ce5fbfc73aacd7726da2c4214e9d787892507497&#x26;req=dSUiHsp9mIVaWPMW1HO4zYN49s6mtEWcCN%2FXzvt4XI3E%2BvkOrumttPzdm4%2F6%0AoFZqi%2FLrxoAMMUofp2o%3D%0A" alt="" width="563"><figcaption></figcaption></figure>

Other situations where you might want to use this handover tool would be:

* "When you can't answer a user's query, use the zendesk\_chat\_handover tool."
* "If the user sounds frustrated, use the zendesk\_chat\_handover tool."
* "If two consecutive attempts at resolving the issue fail, use the zendesk\_chat\_handover tool"
* "If the user's issue is not solvable using knowledge base information, use zendesk\_chat\_handover tool"
* "If the user's issue is related to: security concerns, refunds, or a bug/error, then use zendesk\_chat\_handover tool".

If you want the full chat to be handed over at the end of every chat, then you can add:

* "When the user indicates the chat is over or their issue has been solved/answered, then use the zendesk\_chat\_handover tool."

## Collecting information prior to handover <a href="#h_91ffedeee6" id="h_91ffedeee6"></a>

With eesel AI's integration, you can collect user information through the chat conversationally. To do so, simply head to your Customize tab in the eesel dashboard and add plain text instructions in the prompt to collect the information at a point in the chat you prefer.

For example:

```
When a user first asks a question, always request their name and email before assisting them.
```

_Reminder:_ If you're having trouble setting up collecting fields, then send us a sample ticket with:

* The field you want to collect
* The value of the field

Send this information through the in-app support chat or to [hi@eesel.app](mailto:hi@eesel.app).

### Advanced - filling Zendesk standard fields <a href="#h_6a04876a3d" id="h_6a04876a3d"></a>

You can use the prompt to collect this information and then use that to fill out Zendesk ticket fields.

For example, collecting email and name information at the start of the conversation simply add the following to the prompt:

```
Before helping the user with anything, ask for their name and email, after which you can proceed.
```

Then, add the following information to the prompt (using the system field of the information you want to collect):

```
**Escalation**

Use the `zendesk_chat_handover` tool if the user asks to speak to a human, pass the name and email to the handover tool if they are available, collect if not. The parameter names should be: 
- systemField.requester.name 
- systemField.requester.email
```

### Advanced - filling out Zendesk custom fields <a href="#h_9f00380f5b" id="h_9f00380f5b"></a>

Custom fields are a little trickier, and require the ticket field ID as well as the values you're looking to input. If you have a custom field you're unable to fill out with our prompt, please reach out to support for assistance.

For example, filling out the Custom Field "high level category", the prompt should look something like the following:

```
Also include the a high level category for the enquiry in the handover parameters too. The value should be billing, sales or support based on the content of the enquiry and the parameter name for this should be:
- ticketField.12341130713871 
```

The output of this particular example prompt would then fill in the value of ticket field ID: 12341130713871 with either billing, sales, or support.

You can find the custom ticket information under "Fields" in your Admin Center.

_Reminder:_ If you're having trouble setting up collecting fields, then send us a sample ticket with:

* The field you want to collect
* The value of the field

Send this information through the in-app support chat or to [hi@eesel.app](mailto:hi@eesel.app).

## Integrate the chat with other channels like Facebook Messenger <a href="#h_ff871603ad" id="h_ff871603ad"></a>

eesel's integration can work with iOS and Facebook Messenger channels as well. We're working on updating our dash to include this option, stay tuned!

## Leaving notes and tagging tickets after handover <a href="#h_df5786ec7e" id="h_df5786ec7e"></a>

Once a chat has been handed over to Zendesk using the handover tool, you can use a second bot to triage, tag, and leave notes on these handed over chats.

To do so, simply:\
​

1. Create a new bot in the eesel dashboard and connect it with your Zendesk domain.
2. Setup the new bot's Zendesk triggers so that it _only_ takes actions on new tickets created through the Messenger/widget channel.
3. Add the actions you'd like it to take (like tagging a ticket, or leaving an internal note) to the prompt in the Customize tab. See our [example prompts and actions](broken-reference) for how to configure the actions you prefer.
4. Enable it live and test!
