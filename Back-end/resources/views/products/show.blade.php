@extends('adminlte::page')

@section('title', 'Products Management System | '.$product->name)

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card my-5">
                <div class="card-header bg-white text-center p-3">
                    <h3 class="text-dark">
                        Profile : {{$product->name}}
                    </h3>
                </div>
                <div class="card-body">
                    <div class="form-group mb-3">
                        <label for="name" class="form-label fw-bold">Name</label>
                        <div class="border border-secondary rounded p-2">
                            {{$product->name}}
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <label for="description" class="form-label fw-bold">description</label>
                        <div class="border border-secondary rounded p-2">
                            {{$product->description}}
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <label for="price" class="form-label fw-bold">price</label>
                        <div class="border border-secondary rounded p-2">
                            {{$product->price}}
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <label for="image" class="form-label fw-bold">image</label>
                        <div class="border border-secondary rounded p-2">
                            {{$product->image}}
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection



