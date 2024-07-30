import requests

RAPIDAPI_KEY = "4f6dd8f1e1msh0777a61fa36f1ddp14de5ejsn753c1f2c4a86"

def get_response(user_message):
    url = "https://infinite-gpt.p.rapidapi.com/infinite-gpt"
    headers = {
        "Content-Type": "application/json",
        "X-RapidAPI-Host": "infinite-gpt.p.rapidapi.com",
        "X-RapidAPI-Key": RAPIDAPI_KEY
    }
    payload = {
        "query": user_message,
        "sysMsg": "You are a friendly Chatbot."
    }

    try:
        response = requests.post(url, json=payload, headers=headers)
        print(f"Status Code: {response.status_code}")
        print(f"Response Text: {response.text}")

        if response.status_code == 200:
            response_json = response.json()
            return response_json.get("msg", "Sorry, I couldn't process your request at the moment.")
        else:
            return f"An error occurred: {response.status_code} - {response.text}"
    except Exception as e:
        print(f"An exception occurred: {e}")
        return f"An error occurred: {str(e)}"
