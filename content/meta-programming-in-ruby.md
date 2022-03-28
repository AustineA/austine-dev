---
slug: meta-programming-in-ruby
title: Meta Programming in Ruby.
description: Meta programming can be defined simply as a program that writes other programs. Ruby is very good at this because of it's dynamic capabilities.
date: 28 March 2022
image: https://picsum.photos/389/240
---

# Meta Programming in Ruby

Meta programming can be defined simply as a program that writes other programs. Ruby is very good at this because of it's dynamic capabilities.

Static languages such as C, and C++ compiles your code before it runs, so if you're calling a method that doesn't exist yet. The compiler will yell at you and throw an error. This behave saves you from writing code that would break at runtime.

Dynamic languages such as Ruby and Python don't have compilers. They only call your methods whenever they get to the point where your method is being called. If you're calling a method that doesn't exit yet, ruby will only throw an error at that point. Now why would anybody want that? Having a compiler seem like a better choice.

Well because of this behaviour, ruby allows you to create methods at runtime. Yes, while the code is running you can insert a method or instantiate a new object at runtime. Let's look at a few ruby methods we can use to dynamically alter our code at run time.

## Dynamic Dispatch

When we call a method we usually do so with the dot notation like this: `"text".upcase`.

What if I told you can also call a method with `.send(:method_name, arg)` so `"text".upcase` becomes`"text".send(:upcase)` or `"text".send('upcase')`.

## Dynamic Methods

Dynamic methods as the name suggests allows us to create methods on the fly. To define a method in ruby we use the `def` key would and followed by `end` to close the block.

```ruby
def my_method_name
	#Do something in here
end
```

To create a dynamic method we use `define_method` like so:

```ruby
def my_method_name
  define_method(name, arg) do
    #The methods block
  end
end
```
