import random
import git
import requests
import json
import time


random_letters = ''.join(random.choices('1234567890', k=2))

print(random_letters)
# Path to the file to be updated
file_path = r"C:\Users\Kiera\OneDrive\Desktop\Programs\Made By Me\404Website\code.txt"

# Update the file with random letters
with open(file_path, 'w') as file:
    file.write(random_letters)

# Commit and push the changes to GitHub
repo_path = r"C:\Users\Kiera\OneDrive\Desktop\Programs\Made By Me\404Website"
commit_message = f"Updated code to: {random_letters}"

repo = git.Repo(repo_path)
repo.git.add(file_path)
repo.index.commit(commit_message)
repo.git.push()

# Send the changed code to Discord webhook
webhook_url = "https://discord.com/api/webhooks/1120832134433747025/BIFkf1_x_GKb3NeypcfXBhFN5_cA3Lk2LIiO50JgH2mMBRC8H3JSBJC4V-Q_rkwy35LT"

if len(random_letters) <= 2000:
    data = {
        "content": f"The code has been updated to: {random_letters}"
    }
    headers = {
        "Content-Type": "application/json"
    }
    response = requests.post(webhook_url, data=json.dumps(data), headers=headers)
    if response.status_code == 204:
        print("Webhook message sent successfully!")
    else:
        print(f"Failed to send webhook message. Status Code: {response.status_code}")
else:
    chunks = [random_letters[i:i+1500] for i in range(0, len(random_letters), 2000)]
    for chunk in chunks:
        data = {
            "content": f"{chunk}"
        }
        headers = {
            "Content-Type": "application/json"
        }
        response = requests.post(webhook_url, data=json.dumps(data), headers=headers)
        time.sleep(1)
        if response.status_code == 204:
            print("Webhook message sent successfully!")
        else:
            print(f"Failed to send webhook message. Status Code: {response.status_code}")
