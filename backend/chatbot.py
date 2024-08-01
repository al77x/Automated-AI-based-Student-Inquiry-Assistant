import requests

AZURE_API_KEY = "a4cc25f9f1264104b8d94854f308b161" 
AZURE_ENDPOINT = "https://aasia.openai.azure.com/" 
DEPLOYMENT_NAME = "aasia" 

def get_response(user_message):
    url = f"{AZURE_ENDPOINT}/openai/deployments/{DEPLOYMENT_NAME}/chat/completions?api-version=2023-03-15-preview"
    headers = {
        "Content-Type": "application/json",
        "api-key": AZURE_API_KEY,
    }
    payload = {
        "messages": [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": user_message}
        ],
        "max_tokens": 1000,  
        "temperature": 0.7
    }

    try:
        response = requests.post(url, json=payload, headers=headers)
        print(f"Status Code: {response.status_code}")
        print(f"Response Text: {response.text}")

        if response.status_code == 200:
            response_json = response.json()
            return response_json["choices"][0]["message"]["content"]
        else:
            return f"An error occurred: {response.status_code} - {response.text}"
    except Exception as e:
        print(f"An exception occurred: {e}")
        return f"An error occurred: {str(e)}"
