import jpype
from konlpy.tag import Hannanum


def hannanum(sentence):
    h = Hannanum()

    if jpype.isJVMStarted():
        jpype.attachThreadToJVM()

    return h.analyze(sentence)
