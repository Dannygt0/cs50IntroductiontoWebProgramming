#include <ctype.h>
#include <cs50.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

bool is_numeric_string(string s);
char rotate_char(char c, int k);
// Return Value only if it is digital numerical
bool is_numeric_string(string s)
{
    for(int i = 0, n = strlen(s); i < n; i++)
    {
        if ( !isdigit(s[i]))
        {
            return false;
        }
    }
    return true;
}

// Rotate positions accordingly

char rotate_char(char c, int k)
{
    if (isalpha (c))
    {
        char base = is upper(c) ? 'A' : 'a';
        int p_i = c -base;
        int c_i = (p_i + k) % 26;
        char cipher_char = c_i + base;
        return cipher_char;
    }
    else
    {
    return c;
    }
}

int main (int arg, string argv[])
{
    if (arg != 2)
    {
        printf("Usage: ./caesar key\n");
            return 1;
    }
    if (!only_digits(argv[1]))
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }
    int k = atoi(argv[1]);
    string plaintext = get_string(")

}
