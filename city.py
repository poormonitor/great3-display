import json

with open("city.json", "r", encoding="utf-8") as f:
    source = json.load(f)

with open("area.txt", "r") as f:
    subject = f.read()

data = {}

for line in subject.splitlines():
    code = line[:4]
    for item in source:
        if item["code"][:4] == code:
            city = item["name"]
            city = city.split("市")[0]
            data[city] = data.get(city, 0) + 1
            break

data = [{"name": name, "value": value} for name, value in data.items()]

with open("./src/views/components/page3/city.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
