


# soup = BeautifulSoup(req.content, 'html.parser')
# print(soup.get_text())
# import requests

# from bs4 import BeautifulSoup
# site="https://dramacool.bid/drama-detail/hong-chun-gi"
# req = requests.get("https://dramacool.bid/drama-detail/hong-chun-gi")
# soup = BeautifulSoup(req.content, 'html.parser')
# for i in req.findall("a"):
#     href=i.attrs["href"]
#     if href.startswith("/"):
#         site =site + "/" + href
#         if site not in urls:
#             urls.append(site)

        







# http = httplib2.Http()
# status, response = http.request('https://dramacool.bid/drama-detail/hong-chun-gi')
# req = requests.get("https://dramacool.bid/drama-detail/hong-chun-gi")
# soup = BeautifulSoup(req.content, 'html.parser')
# # print(soup.get_text())

# soap= BeautifulSoup(req.links,'html.parser')
# print(soup.get_text()+soap.get_link())