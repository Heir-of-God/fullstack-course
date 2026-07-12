## New note in Single page app diagram

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User clicks "save" in the browser

    Note right of browser: Note is pushed to the "notes" array in frontend

    Note right of browser: The text in form's field is set to empty

    Note right of browser: The "ul" element in DOM tree is replaced with new one containing new note

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/new_note_spa

    Note left of server: The note is saved on the server

    activate server
    server-->>browser: JSON response "{message: "note created"}"
    deactivate server
```
