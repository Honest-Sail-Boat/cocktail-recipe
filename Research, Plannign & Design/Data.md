# Database Schema

## User
  - username
  - password
  - id

## Cocktail
  - name
  - nickname (optional)
  - category (alcoholic or non-alcoholic)
  - alcohol percentage
  - serving glass
  - origin
    - country
    - backstory
  - user_id
  - recipe_id
     
## Recipe
  - id
  - ingredients: array
  - procedure: array

### Concerns
- [ ] What's the difference between recipes from our API and those from external API's
- [ ] Where do we get our "backstories"
- [ ] User can create "cards" of their resources  