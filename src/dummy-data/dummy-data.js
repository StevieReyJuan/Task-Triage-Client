module.exports = () => ({
    "teams": [
      {
        "id": 1,
        "name": "Work",
        "code": "1###-1###-1###"
      },
      {
        "id": 2,
        "name": "Home",
        "code": "2###-2###-2###"
      },
      {
        "id": 3,
        "name": "Friends",
        "code": "3###-3###-3###"
      },
    ],
    "users": [
        {
            "id": 1,
            "user_name": "me",
            "password": "password123"
        },
        {
            "id": 2,
            "user_name": "you",
            "password": "password456"
        }
    ],
    "tasks": [
      {
        "id": 1,
        "team": 1,
        "title": "OMG",
        "status": "Urgent",
        "content": "This is important!"
      },
      {
        "id": 4,
        "team": 2,
        "title": "Uhhh...Guys?",
        "status": "Important",
        "content": "What's going on over here?"
      },
      {
        "id": 7,
        "team": 3,
        "title": "Zzz",
        "status": "Normal",
        "content": "I'll do that later."
      }
    ]
  })