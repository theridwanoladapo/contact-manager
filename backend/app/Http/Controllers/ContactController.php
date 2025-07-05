<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Http\Resources\ContactResource;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * List all contacts.
     */
    public function index()
    {
        // Fetch all contacts from the database
        $contacts = Contact::all();

        // Return the contacts as a resource collection
        return ContactResource::collection($contacts);
    }

    /**
     * Add new contact.
     */
    public function store(StoreContactRequest $request)
    {
        // Validate and create a new contact using the request data
        $contact = Contact::create($request->validated());

        // Return the created contact as a resource
        return new ContactResource($contact);
    }

}
