# BookShorts
A web app to save your own book summaries. Add, view, and delete summaries anytime — all saved in your browser.
# 📚 BookShorts

BookShorts is a browser-based web app that lets users **store their own book summaries**.  
Each summary includes a title, author, and a short description. Data is saved in **LocalStorage**, so summaries remain even after refresh or shutdown — without any backend.

---

## 🚀 Features

- Add custom book summaries
- Persistent storage using LocalStorage
- Delete any summary instantly
- Floating “+” button for quick add
- Responsive card-style UI
- Works completely offline

---

## 📸 Screenshots

### Home UI
<img width="1920" height="1032" alt="image" src="https://github.com/user-attachments/assets/bfc0bb4f-e3b5-404a-8059-6521f0aa8ae8" />


### Card Layout Example
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/96cf5266-a0f0-4256-bcf5-80659030132b" />

> Replace the images in `assets/` folder with your own screenshots.  
> Keep the same filenames to avoid breaking markdown.

---

## 🧰 Tech Stack

| Part | Technology |
|------|------------|
| Structure | HTML |
| Styling | CSS |
| Logic + Storage | JavaScript (LocalStorage) |

---
## 🧠 How It Works

- User enters book details using the form popup
- JavaScript saves all data in **LocalStorage**
- Saved summaries automatically load when the page opens
- Delete button removes the card from UI **and** LocalStorage

---

## 🔮 Future Improvements

- Edit existing summaries
- Search or filter by category/author
- Add book cover image upload
- Cloud sync with authentication
- Dark / Light theme switch

---

## 🪪 License

This project is open-source under the **MIT License**.

---
# BookShorts

A simple web app to store and view book summaries using LocalStorage.

## Project Structure

BookShorts/
│
├── index.html      # Main page with form and list of book summaries
├── style.css       # Styling for the web app
└── script.js       # Handles LocalStorage operations and DOM manipulation

## Features

- Add book details via a form popup
- Store book summaries in LocalStorage
- Display saved summaries on page load
- Delete summaries from UI and LocalStorage
- Future improvements: edit summaries, search/filter by category or author, add book cover images

## How to Use

1. Open `index.html` in a browser.
2. Fill the form with book details.
3. Click "Save" to store the summary.
4. Use the "Delete" button to remove summaries.



## 👤 Developer

Created by **Pradeep R**  
Open to contributions & improvements 🚀


