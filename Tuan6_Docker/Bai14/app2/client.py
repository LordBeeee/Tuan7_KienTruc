import requests

res = requests.get("http://app1:5000/")
print("Kết quả từ App1:", res.text)
