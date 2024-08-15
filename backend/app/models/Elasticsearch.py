from elasticsearch import Elasticsearch
 
# 连接到在localhost:9200上运行的Elasticsearch实例
es = Elasticsearch("http://localhost:9200","elastic","123456")


def elasticsearch():
    # 搜索所有文档
    response = es.search(index="my_index", body={"query": {"match_all": {}}})
    print(response)