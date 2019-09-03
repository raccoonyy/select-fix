import jpype
from konlpy.tag import Hannanum

from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET', ])
def hannanum(request):
    h = Hannanum()

    if jpype.isJVMStarted():
        jpype.attachThreadToJVM()

    sentence = request.GET.get('sentence')
    if sentence is None:
        return Response('request failed.', status=400)

    results = h.analyze(sentence)
    return Response(results)
