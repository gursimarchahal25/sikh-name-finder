# Sikh Name Finder

This is a simple website that helps parents and families discover Sikh names for a newborn. Users can browse names, search by text, filter by starting letter, and see the meaning and basic details of each name. This project is built with React and Supabase. No account or sign-up is needed.

## Tech stack

- React (user interface)
- Vite (server and build)
- Supabase (PostgreSQL)
- Git and Github (version control)

## Requirements

- Node.js
- Supabase 

## Current state

- React app created with Vite
- A page with title, search bar, A-Z letter buttons and names
- Names are loaded from a Supabase table called 'names' when the page loads
- Components: SearchBar, Letterfilter, Namelist, Namecard

## how data works

- The page loads and 'useEffect' runs
- 'fetchNames' requests Supabase for all rows in 'names' table
- Supabase checks the read policy and returns the rows
- 'setNames(data)' saves them in state
- React redraws the page with the names

## Database

'names' table:

| Column | Type | Required |
|---|---|---|
| id | int8 | yes |
| name | text | yes |
| meaning | text | yes |
| first_letter | text | yes |
| pronunciation | text | no |
| gurmukhi | text | no |
| notes | text | no |
| source | text | no |

Row Level Security is enabled with a read-only policy so the public can read names but cannot add, edit, or delete them.


## React structure

```
src/
App.jsx - page layout and state
components/
SearchBar.jsx - text search
LetterFilter.jsx - A-Z filter
NameList.jsx - list of results
NameCard.jsx - one name result
lib/
supabase.js - database connection
```
## Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/gursimarchahal25/sikh-name-finder
   ```                                          

2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the project root with your Supabase details from Project Settings → dataAPI: API URL and API keys:publishable key (public key).

   ```
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-public-key
   ```
   Use the base project URL only, with nothing after `.supabase.co`. Never commit this file.
4. In Supabase, create the `names` table described above, add the read policy, and insert desired rows.

5. Start the app:
   ```bash
   npm run dev
   ```
6. Open http://localhost:5173 in your browser.

## Author

Gursimar Singh Chahal


