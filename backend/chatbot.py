import requests  # import the requests library to handle HTTP requests

# Azure OpenAI API credentials and endpoint configuration
AZURE_API_KEY = "a4cc25f9f1264104b8d94854f308b161"  # Azure API key
AZURE_ENDPOINT = "https://aasia.openai.azure.com/"  # base URL for the Azure OpenAI service
DEPLOYMENT_NAME = "aasia"  # name of deployment

# function to get a response from Azure OpenAI based on the user's message
def get_response(user_message):
    # construct the full API URL for chat completions
    url = f"{AZURE_ENDPOINT}/openai/deployments/{DEPLOYMENT_NAME}/chat/completions?api-version=2023-03-15-preview"
    
    # set up the headers for the HTTP request
    headers = {
        "Content-Type": "application/json",  # specify that we're sending JSON data
        "api-key": AZURE_API_KEY,  # include the API key for authentication
    }

    # prepare the payload with the user's message and parameters for the response
    payload = {
        "messages": [
            {"role": "system", "content": "You are a helpful assistant."},  # system message to set the assistant's behavior
            {"role": "user", "content": user_message}  # the user's input message
        ],
        "max_tokens": 1000,  # limit the response to 1000 tokens
        "temperature": 0.7  # control the randomness of the response
    }

    try:
        # make the HTTP POST request to the Azure OpenAI API
        response = requests.post(url, json=payload, headers=headers)
        print(f"Status Code: {response.status_code}")  # log the status code for debugging
        print(f"Response Text: {response.text}")  # log the response text for debugging

        # check if the request was successful
        if response.status_code == 200:
            response_json = response.json()  # parse the JSON response
            return response_json["choices"][0]["message"]["content"]  # extract and return the AI's message
        else:
            # if the API returns an error
            return f"An error occurred: {response.status_code} - {response.text}"
    except Exception as e:
        # exceptions that occur during the request
        print(f"An exception occurred: {e}")  # log the exception for debugging
        return f"An error occurred: {str(e)}"  # return a friendly error message
