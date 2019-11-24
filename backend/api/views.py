from rest_framework.decorators import api_view
from rest_framework.response import Response

from .hannanum import hannanum


@api_view(['GET', ])
def analyse(request):
    sentence = request.GET.get('sentence')
    if sentence is None:
        return Response('request failed.', status=400)

    return Response(hannanum(sentence))
