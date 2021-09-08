def newLine(str):
    output = ""
    list = str.split(".")

    for i in list:
        output += i + ".\n"
    return output


if __name__ == "__main__":
    str = input("Enter a string: ")
    print(newLine(str))

    
