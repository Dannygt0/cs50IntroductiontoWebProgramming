#include <cs50.h>
#include <stdio.h>

const int MAX_VALUE = 100;
const int MIN_VALUE = 1;

void print_pyramid_row(int amount, int height);

int main(void) // Main function, it asks you for the amout of levels you want
{
    int height = get_int("What height do you want ");
    if (height >= MIN_VALUE && height < MAX_VALUE)
    {
        for (int i = 1; i <= height; i++)
        {
            print_pyramid_row(i, height);
            printf("\n");
        }
    }
}

void print_pyramid_row (int amount, int height) // This prints how many rows and spaces we need for the pyramid
{
    for (int i = MIN_VALUE; i < height - amount ; i++) // Prints empty Spaces
    {
        printf(" ");
    }
    for (int i = MIN_VALUE; i < amount; i++)
    {
        printf("#"); //Prints #
    }
}
