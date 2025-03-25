#include <cs50.h>
#include <stdio.h>

void print_bricks(int bricks);
void print_spaces(int count);

int main(void)
{
    int niveles;
    do
    {
        niveles = get_int("Cuantos niveles quieres: ");
    }
    while (niveles < 1);

    for (int i = niveles; i > 0; i--)
    {
        print_spaces(niveles - i);
        print_bricks(i);
    }
}

void print_bricks(int count)
{
    for (int i = 0; i < count; i++)
    {
        printf("#");
    }
    printf("\n");
}
void print_spaces(int count)
{
    for (int i = 0; i < count; i++)
    {
        printf(" ");
    }
}
