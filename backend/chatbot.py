import requests # import the requests library for making HTTP requests

# azure openAI API credentials and endpoint configuration
AZURE_API_KEY = "a4cc25f9f1264104b8d94854f308b161" 
AZURE_ENDPOINT = "https://aasia.openai.azure.com/" 
DEPLOYMENT_NAME = "aasia" 

# function to get a response from the AZURE openAI based on the user's message
def get_response(user_message):
    # construct API URL for the chat completion endpoint
    url = f"{AZURE_ENDPOINT}/openai/deployments/{DEPLOYMENT_NAME}/chat/completions?api-version=2023-03-15-preview"
    # define the headers for the HTTP request
    headers = {
        "Content-Type": "application/json",
        "api-key": AZURE_API_KEY,
    }

    # define the payload for the request
    payload = {
        "messages": [
            {"role": "system", "content": "You are a helpful assistant."}, # system message to define the assistant's role
            {"role": "user", "content": user_message} # user message containing the input text
        ],
        "max_tokens": 1000, # max number of tokens in the response
        "temperature": 0.7 # temperature controls the randomness of the AI's responses
    }

    try:
        # Make the HTTP POST request to the API
        response = requests.post(url, json=payload, headers=headers)
        print(f"Status Code: {response.status_code}")
        print(f"Response Text: {response.text}")

        # check if the request was successful
        if response.status_code == 200:
            response_json = response.json() 
            return response_json["choices"][0]["message"]["content"]
        else:
            return f"An error occurred: {response.status_code} - {response.text}"
    except Exception as e:
        # handle exceptions and return an error message
        print(f"An exception occurred: {e}")
        return f"An error occurred: {str(e)}"
