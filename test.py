li = list("=sdfsd==sdf=two")

for i in range(li.count("=")):
    if ((li.index("=") - 1) >= 0) | (li[li.index("=") - 1:] != "="):
        del li[li.index("=") - 1]

for i in range(li.count("=")):
    del li[li.index("=")]

print(li)